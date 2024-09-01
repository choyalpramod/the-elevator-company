import {TitleComponent} from "@/modules/components/TitleComponent/TitleCoponent";
import {ImageSlider} from "@/modules/components/Banner";
import {commercialLifts, imageUrls} from "./constants";
import {ProductView} from "@/modules/components/ProductView";

export const CommercialLifts = () => {
    return (
        <div>
            <TitleComponent title="Commercial Lifts" className="uppercase"/>
            <ImageSlider images={imageUrls}/>
            <ProductView list={commercialLifts}/>
        </div>
    )
}