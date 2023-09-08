'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, FC, ReactNode } from "react";
import { TProductCart, TUser } from "@/data/types"

interface Props {
    children?: ReactNode
    // any props that come into the component
}

interface ContextProps {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>,
    userId: number,
    setUserId: Dispatch<SetStateAction<number>>,
    cartItems: TProductCart[],
    setCartItems: Dispatch<SetStateAction<TProductCart[]>>
    addToCart: Dispatch<TProductCart>,
    removeFromCart: Dispatch<TProductCart>,
    clearCart: Dispatch<SetStateAction<TProductCart[]>>,
    getCartTotal: () => void
}

const GlobalContext = createContext<ContextProps>({
    showModal: false,
    setShowModal: (): boolean => false,
    userId: 0,
    setUserId: (): number => 0,
    cartItems: [],
    setCartItems: (): TProductCart[] => [],
    addToCart: () => null,
    removeFromCart: () => null,
    clearCart: () => null,
    getCartTotal: () => null,
})

export const GlobalContextProvider = ({ children }: Props) => {
    const [userId, setUserId] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [cartItems, setCartItems] = useState<[] | TProductCart[]>([])

    useEffect(() => {
        let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
        setCartItems(cartItems)
    }, [])


    const addToCart = (item: TProductCart) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        console.log('ITEMS -> ', cartItems)
    };

    const removeFromCart = (item: TProductCart) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

        if (isItemInCart && isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity! - 1 }
                        : cartItem
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {

        return [0, 1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        // return cartItems.reduce<number>((total: number, item: TProductCart) => total + item.price * item.quantity!, 0);
    };

    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
            setCartItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]); // Include cartItems as a dependency here


    return (
        <GlobalContext.Provider value={{ showModal, setShowModal, userId, setUserId, cartItems, setCartItems, addToCart, removeFromCart, clearCart, getCartTotal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)