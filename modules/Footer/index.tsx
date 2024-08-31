import {Presence} from "@/modules/Footer/Presence";
import {FiPhoneCall} from "react-icons/fi";
import {FaMapMarkerAlt} from "react-icons/fa";
import Image from "next/image";
import {getLogoImageUrl} from "@/utils/helper";

export const Footer = () => {
    return (
        <div>
            <Presence/>
            <footer className="flex justify-center bg-black text-white mt-[1px] py-8">
                <div className="lg:px-0 lg:w-[1000px] flex gap-2 w-full px-8">
                    <div className="flex-1">
                        <Image src={getLogoImageUrl()} alt="The Elevator Company logo" height={100} width={95}/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl primary-text-color pb-3">Our Products</h2>
                        <ul>
                            <li>Luxury Home Lifts</li>
                            <li>Commercial Lifts</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <FiPhoneCall aria-label="Phone icon"/>
                            <div>
                                <a href="tel:+918882816971">+91 888 281 6971</a>
                            </div>
                        </div>
                        <address className="flex items-center gap-2">
                            <FaMapMarkerAlt aria-label="Location icon"/>
                            <div>
                                <p>4/1, Tilak Nagar, Janakpuri</p>
                                <p>New Delhi</p>
                                <p>Delhi, 110058</p>
                            </div>
                        </address>
                    </div>
                </div>
            </footer>
        </div>
    )
}