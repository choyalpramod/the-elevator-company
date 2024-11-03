import {categoryList, CategoryType} from "@/modules/Dashboard/OurCategory/constants";
import Image from "next/image";
import Link from "next/link";

export const Categories = () => {
    return (
        <>
            <div className="flex justify-center md:gap-16 flex-col md:flex-row">
                {categoryList.map((category, index) => <Category key={`category-${category.url}`} {...category}/>)}
            </div>
        </>
    )
}

export const Category = ({imageUrl, title, url}: CategoryType) => {
    return (
        <Link href={url}>
            <h3 className="text-center text-2xl py-5">
                {title}
            </h3>
            <div className="flex justify-center">
                <Image src={imageUrl} height={600} width={400} alt={title}/>
            </div>
        </Link>
    )
}