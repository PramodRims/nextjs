export default function Docs({params}: {
    params: {
        slug: string[];
    };

}) {  
    if (params.slug?.length == 2) {
        return (
            <main>
                <h1 className="text-3xl font-bold underline">View Doc for feature: {params.slug[0]} and concept {params.slug[1]}</h1>
            </main>
        );
    }  
    else if (params.slug?.length == 1) {

        return (
            <main>
                <h1 className="text-3xl font-bold underline">View Doc for feature: {params.slug[0]}</h1>
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-3xl font-bold underline">View Doc</h1>
        </main>
    );
}