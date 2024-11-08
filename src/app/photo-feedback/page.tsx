import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-3xl text-center font-bold my-4">
                New Wonders of the World
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wonders.map(({id,image,title}) => (
                    <Link href={`/photo-feed/${id}`} key={id}>
                        <Image
                            src={image}
                            alt={title}
                            width={300} 
                            height={200}
                            className="w-full h-full object-cover"
                        />      
                    </Link>
                ))}
            </div>
        </main>
    );
}