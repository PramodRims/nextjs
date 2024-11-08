"use client";

import { error } from "console";

export default function ErrorBoundary({error: {message: errorMessage}}: {error: {message: string}}) {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">{errorMessage}</h1>
        </main>
    );
}