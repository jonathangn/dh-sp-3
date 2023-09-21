'use client'
import Checkout from "@/components/checkout/Checkout";
import { useGlobalContext } from "@/contexts/store";

export default function CheckoutPage() {

    const { showModal, setShowModal } = useGlobalContext()

    return (
        <main>
            <Checkout />
        </main >
    );
}