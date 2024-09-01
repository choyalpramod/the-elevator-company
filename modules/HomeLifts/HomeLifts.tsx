import {TitleComponent} from "@/modules/components/TitleComponent/TitleCoponent";
import {ImageSlider, ImageUrlType} from "@/modules/components/Banner";

const imageUrls: ImageUrlType[] = [
    {
        imageUrl: '/home-lifts/wall-paper/wall-paper-1.jpg',
        content: 'Introducing our luxury home elevator, designed to seamlessly integrate into your existing residence with minimal civil changes. Adhering to stringent European safety standards, this elevator offers effortless installation for both indoor and outdoor settings.'
    },
    {
        imageUrl: '/home-lifts/wall-paper/wall-paper-2.jpg',
        content: 'In order to protect passengers in the event of a malfunction, our elevators are outfitted with a number of safety features, such as emergency brakes, OSG, Hydraulic Suspension/ Seismic absorber, and ARD/ERD. For your smart home elevator we offer you AENS , VCFS, Biometric Integrations and Automation.'
    },
];

export const HomeLifts = () => {
    return (
        <div>
            <TitleComponent title="Luxury Home Lifts"/>
            <ImageSlider images={imageUrls}/>
        </div>
    )
}