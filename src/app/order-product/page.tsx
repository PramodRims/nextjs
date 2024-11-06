"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Place Layout");
        router.push("/");
    };
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Order Product</h1>
            <button onClick={handleClick}>Place Layout</button>
        </main>
    );
}