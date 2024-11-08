"use client";
import Card from '@/components/Card';
export default function ProductDetailLayout({children,
}: {
    children: React.ReactNode
}) {
    
    return (
        <>
            <main>
                {children}
            <h2>Feature Product</h2>
            < Card title = "Amazon Gift Cards" description = "If a dog chews shoes whose shoes does he choose?"/>
            </main>
        </>
    );
}