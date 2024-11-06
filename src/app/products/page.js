import React from "react";
import Link from "next/link";

export default function Products() {
    const productList = [
        { id: 1, name: "Product1" },
        { id: 2, name: "Product2" },
        { id: 3, name: "Product3" },
    ];

    return (
        <main>
            <h1 className="text-3xl font-bold underline">Products List</h1>
            {productList.map((product) => (
                <h2 key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h2>
            ))}
        </main>
    );
}
