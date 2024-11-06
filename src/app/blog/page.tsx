import React from 'react';
import { Metadata } from 'next';

export const metadata = {   
    title: {
        absolute: "Next Js",
        default: "Next.js Tutorial- Blog",
        template: "%s| Next.js",
    },
    description: "Generated by Next.js",
    }
export default function Blog() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Blog Page</h1>
        </main>
    );
}