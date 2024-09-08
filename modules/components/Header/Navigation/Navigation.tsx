import Link from "next/link";
import {URLs} from "@/utils/constants";

export const Navigation = () => {
    return (
        <nav className="hidden gap-4 text-sm font-medium md:flex">
            <Link href="/" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Home
            </Link>
            <Link href={URLs.homeLifts} className="hover:underline hover:underline-offset-4" prefetch={false}>
                Home Lifts
            </Link>
            <Link href={URLs.commercialLifts} className="hover:underline hover:underline-offset-4" prefetch={false}>
                Commercial Lifts
            </Link>
        </nav>
    )
}