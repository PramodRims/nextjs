import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Photo Detail",
  description: "View details of selected photo",
};

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  // Ensure params are awaited in dynamic routes
  const { id } = await params;

  // Use find safely with fallback
  const photo = wondersImages.find((image) => image.id === id);

  if (!photo) {
    notFound(); // Redirects to a 404 page
  }

  return (
    <main className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl text-center font-bold my-4">{photo.title}</h1>
        <Image
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover"
          priority
        />
        <div className="bg-white py-4">
          <h3 className="font-semibold">Photographer: {photo.photographer}</h3>
          <h3 className="font-semibold">Location: {photo.location}</h3>
        </div>
      </div>
    </main>
  );
}
