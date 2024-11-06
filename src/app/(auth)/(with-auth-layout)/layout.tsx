import { useRouter } from "next/navigation";
export default function AuthLayout({children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const handleClick = () => {
        console.log("Place Layout");
        router.push("/(auth)/(with-auth-layout)/inner-layout");
    };
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Inner Layout {children}</h1>
        </main>
    );
}   