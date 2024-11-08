import Link from "next/link";
export default function F1() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">F1 Page</h1>
            <Link href="/f1/f2">F2</Link>
        </main>
    );
}