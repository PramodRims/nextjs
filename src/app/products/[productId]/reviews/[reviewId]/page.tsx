import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}        

export default async function ReviewDetail({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    const randomInt = getRandomInt(2);
    if (randomInt === 1) {
        throw new Error("Error Loading Review Detail"); 
    }
    const reviewId = parseInt(params.reviewId);

    // Check if reviewId is greater than 5 and return `notFound` if so
    if (reviewId > 5) {
        return notFound();
    }

    return (
        <main>
            <h1 className="text-3xl font-bold underline">
                Review {params.reviewId} for product {params.productId}
            </h1>
        </main>
    );
}
