import Link from "next/link";
export default function F4() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">F4 Page</h1>
            <Link href="/f1/f3">F3</Link>
            <Link href="/about">About</Link>
        </main>
    );
}