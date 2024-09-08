import Image from "next/image";
import './Logo.css'
import {getLogoImageUrl} from "@/utils/helper";

export const Logo = () => {
    return (
        <div>
            <figure className="flex items-center p-2">
                <div>
                    <Image
                        src={getLogoImageUrl()}
                        alt="The Elevator Company Logo"
                        height={100}
                        width={95}
                        className="w-12"
                    />
                </div>
                <figcaption className="px-1">
                    <h1 className="logo-title-styles text-xl uppercase">The Elevator Company</h1>
                    <h3 className="logo-title-styles text-xs uppercase">crafting precision for elevators</h3>
                </figcaption>
            </figure>
        </div>
    );
};