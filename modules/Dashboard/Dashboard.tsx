import {ImageSlider, ImageUrlType} from "@/modules/components/Banner";
import {Journey} from "./Journey";
import ContactUs from "@/modules/ContactUs";
import {OurCategory} from "@/modules/Dashboard/OurCategory";

const imageUrls: ImageUrlType[] = [
    {
        imageUrl: '/wall-papers/wall-paper-1.png',
    },
    {
        imageUrl: '/wall-papers/wall-paper-2.png',
    },
];

export const Dashboard = () => {
    return (
        <div>
            <ImageSlider images={imageUrls}/>
            <Journey/>
            <OurCategory/>
            <ContactUs/>
        </div>
    );
}
