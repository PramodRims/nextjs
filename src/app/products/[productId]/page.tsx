import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = `I Phone ${params.productId}`;
    return {
        title: `Product Detail ${title}`,
    };
};

export default function ProductDetail({ params }: Props) {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Product Detail {params.productId}</h1>
        </main>
    );
}
