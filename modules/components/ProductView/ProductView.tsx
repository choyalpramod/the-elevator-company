import Image from "next/image";
import {TitleComponent} from "@/modules/components/TitleComponent/TitleCoponent";

export type ContentType = {
    imageUrl: string
    title?: string
    contents: string[]
    specialFeatures?: string
}

export type ProductType = {
    title: string
    contents: ContentType[]
}

interface ProductViewProps {
    list: ProductType[]
}

export const ProductView = ({list}: ProductViewProps) => {
    return (
        <div>
            {list.map((product, index) => (
                <div key={`elevator-listing-${product.title}-${index}`}>
                    <TitleComponent title={product.title} className="uppercase"/>
                    <div>
                        {product.contents.map((content, indexK) => (
                            <div key={`elevator-${content.imageUrl}-${indexK}`}
                                 className="p-8 flex items-center">
                                <div className="flex-1 flex justify-center">
                                    <Image src={content.imageUrl} alt={product.title} height={500} width={500}/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl">{content.title}</h3>
                                    <ul className='list-disc pl-8 mt-4'>
                                        {content.contents.map((item, indexP) => (
                                            <li key={`elevator-content-${content.imageUrl}-${indexP}`}>{item}</li>
                                        ))}
                                    </ul>
                                    {content.specialFeatures && (
                                        <>
                                            <div></div>
                                            <div>{content.specialFeatures}</div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}