import Link from "next/link";
import {URLs} from "@/utils/constants";

const navigationList = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Home Lifts',
        url: URLs.homeLifts,
    },
    {
        title: 'Commercial Lifts',
        url: URLs.commercialLifts,
    },
    {
        title: 'Contact Us',
        url: URLs.contactUs,
    },
]

export const Navigation = () => {
    return (
        <nav className="flex gap-4 text-md font-medium md:flex text-white px-5 pb-3 lg:pb-0">
            {navigationList.map(({url, title}, index) => (
                <Link href={url} className="hover:underline hover:underline-offset-4 text-center cursor-pointer"
                      prefetch={false}
                      key={`navigation-link-${url}-${index}`}>
                    {title}
                </Link>
            ))}
        </nav>
    )
}
