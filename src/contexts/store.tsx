'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, FC, ReactNode } from "react";
import { TProductCart } from "@/data/types"
import { useForm } from "react-hook-form";
interface Props {
    children?: ReactNode
}

export type TStepValues = {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    cardName: string,
    cardNumber: string,
    expDate: string,
    cvv: string,
}

interface ContextProps {
    isAdmin: boolean,
    setIsAdmin: Dispatch<SetStateAction<boolean>>,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    userId: number,
    setUserId: Dispatch<SetStateAction<number>>,
    cartItems: TProductCart[],
    setCartItems: Dispatch<SetStateAction<TProductCart[]>>
    addToCart: Dispatch<TProductCart>,
    removeFromCart: Dispatch<TProductCart>,
    removeReference: Dispatch<TProductCart>,
    clearCart: Dispatch<SetStateAction<TProductCart[]>>,
    getCartTotal: () => void
    checkOutForm: object
    productsStore: TProductCart[]
    setProductsStore: Dispatch<SetStateAction<TProductCart[]>>
}

const GlobalContext = createContext<ContextProps>({
    isAdmin: false,
    setIsAdmin: (): boolean => false,
    showModal: false,
    setShowModal: (): boolean => false,
    userId: 0,
    setUserId: (): number => 0,
    cartItems: [],
    setCartItems: (): TProductCart[] => [],
    addToCart: () => null,
    removeFromCart: () => null,
    removeReference: () => null,
    clearCart: () => null,
    getCartTotal: () => null,
    checkOutForm: {},
    productsStore: [],
    setProductsStore: (): TProductCart[] => [],
})

export const GlobalContextProvider = ({ children }: Props) => {
    const checkOutForm = useForm<TStepValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            cardName: '',
            cardNumber: '',
            expDate: '',
            cvv: '',
        },
        mode: 'all',
    })

    const [productsStore, setProductsStore] = useState<[] | TProductCart | any>([])

    const [userId, setUserId] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [cartItems, setCartItems] = useState<[] | TProductCart[]>([])

    useEffect(() => {
        let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
        setCartItems(cartItems)
    }, [])

    const addToCart = (item: TProductCart) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item: TProductCart) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart && isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity! - 1 }
                        : cartItem
                )
            );
        }
    };

    const removeReference = (item: TProductCart) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }
    };


    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        let cartTotal = 0
        cartItems.map((item) => {
            cartTotal = cartTotal += (item.price * item.quantity)
        })

        return cartTotal.toFixed(2)
    };

    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
            setCartItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <GlobalContext.Provider value={{ showModal, setShowModal, userId, setUserId, cartItems, setCartItems, addToCart, removeFromCart, clearCart, getCartTotal, removeReference, checkOutForm, productsStore, setProductsStore, isAdmin, setIsAdmin }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)