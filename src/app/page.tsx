import Link from "next/link";
export default function Home() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog/first">First Blog</Link>
            <Link href="/blog/second">Second Blog</Link>
            <Link href="/blog/second/third">Third Blog</Link>
            <Link href="/blog/blogdetail">Blog Detail</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/docs/nextjs">Docs NextJs</Link>
            <Link href="/docs/nextjs/concepts">Docs NextJs Concepts</Link>
        </main>
    );
}