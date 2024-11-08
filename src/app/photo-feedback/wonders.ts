import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
    id : string;
    image: StaticImageData;
    title: string;
    location: string;
    photographer: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        image: photo1,
        title: "The Grand Canyon",
        location: "Arizona",
        photographer: "John Doe",
    },
    {
        id: "2",
        image: photo2,
        title: "Mount Fuji",
        location: "Japan",
        photographer: "Jane Smith",
    },
    {
        id: "3",
        image: photo3,
        title: "Colosseum",
        location: "Italy",
        photographer: "John Doe",
    },
    {
        id: "4",
        image: photo4,
        title: "The Great Wall of China",
        location: "China",
        photographer: "Jane Smith",
    },
    {
        id: "5",
        image: photo5,
        title: "The Taj Mahal",
        location: "India",
        photographer: "John Doe",
    },
    {
        id: "6",
        image: photo6,
        title: "The Great Pyramid of Giza",
        location: "Egypt",
        photographer: "Jane Smith",
    },
    {
        id: "7",
        image: photo7,
        title: "The Great Pyramid of Giza",
        location: "Egypt",
        photographer: "Jane Smith",
    }
] as const;

export default wondersImages;


