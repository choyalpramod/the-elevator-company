import {URLs} from "@/utils/constants";

export const categoryList: CategoryType[] = [
    {
        imageUrl: '/product-images/felix-01.jpg',
        title: 'Home Lifts',
        url: URLs.homeLifts,
    },
    {
        imageUrl: '/product-images/elivio-01.jpg',
        title: 'Commercial Lifts',
        url: URLs.commercialLifts,
    }
]

export type CategoryType = {
    imageUrl: string;
    title: string;
    url: string;
}