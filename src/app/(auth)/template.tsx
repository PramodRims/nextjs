"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";
import { Input } from "postcss";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input,setInput] = useState("");

    return (
        <>
            <header>

            <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <nav>
                    <ul>
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={isActive ? "font-bold underline" : "font-normal"}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
