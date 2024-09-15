import Image from "next/image";
import './Logo.css'
import {getLogoImageUrl} from "@/utils/helper";
import Link from "next/link";

export const Logo = () => {
    return (
        <div>
            <Link href='/' className="cursor-pointer">
                <figure className="flex items-center p-2">
                    <div>
                        <Image
                            src={getLogoImageUrl()}
                            alt="The Elevator Company India Logo"
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
            </Link>
        </div>
    );
};