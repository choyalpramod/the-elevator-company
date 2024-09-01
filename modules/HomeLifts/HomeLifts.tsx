import {TitleComponent} from "@/modules/components/TitleComponent/TitleCoponent";
import {ImageSlider, ImageUrlType} from "@/modules/components/Banner";
import {homeLifts, imageUrls} from "./constants";
import {ProductView} from "@/modules/components/ProductView";

export const HomeLifts = () => {
    return (
        <div>
            <TitleComponent title="Luxury Home Lifts" className="uppercase"/>
            <ImageSlider images={imageUrls}/>
            <ProductView list={homeLifts}/>
        </div>
    )
}