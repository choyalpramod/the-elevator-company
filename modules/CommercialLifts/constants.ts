import {ImageUrlType} from "@/modules/components/Banner";
import {ProductType} from '@/modules/components/ProductView'

export const imageUrls: ImageUrlType[] = [
    {
        imageUrl: '/commercial-lifts/wall-paper/wall-paper-1.jpg',
        content: 'Our state-of-the-art commercial lifts offer seamless vertical mobility, perfect for office buildings or hotels. Combining cutting-edge technology with sleek design, they ensure fast, smooth, and safe transportation for people and goods. Experience efficiency, comfort, and reliability, and rise above the competition with our innovative solutions.'
    },
    {
        imageUrl: '/commercial-lifts/wall-paper/wall-paper-2.jpg',
        content: 'Commercial lifts provide fast, reliable service and advanced safety features, ideal for high-traffic and heavy load environments. Enhance accessibility and efficiency seamlessly within business settings.'
    },
];

export const commercialLifts: ProductType[] = [
    {
        title: 'ELIVIO',
        contents: [
            {
                imageUrl: '/product-images/elivio-01.jpg',
                title: 'Geared Drive',
                contents: [
                    'Compliance: Meets European standard EN81-41.',
                    'Usage: Commercial, Residential, and Industrial buildings',
                    'Mechanism: Elevator with Machine room.',
                    'Power: Compatible with three-phase power.',
                    'Minimum pit requirement of just 1500 mm and headroom clearance of 4800mm',
                    'Tailor Made Solutions',
                    'Capacity: 408 kg - 2500 kg',
                    'Speed: 1.0 m/s to 2.5 m/s.',
                    'Number of Stops: Up to 20 stops.'
                ],
            }
        ]
    },
    {
        title: 'ELIVIO 2.0',
        contents: [
            {
                imageUrl: '/product-images/elivio-02.jpg',
                title: 'Gearless Drive MRL',
                contents: [
                    'Compliance: Meets European standard EN81-41.',
                    'Drive System: Gearless Traction.',
                    'Usage: Commercial, Residential, and Industrial buildings.',
                    'Mechanism: Elevator without Machine room.',
                    'Power: Compatible with three-phase power.',
                    'Capacity: 408 kg - 2500 kg',
                    'Speed: 1.0 m/s to 2.5 m/s.',
                    'Number of Stops: Upto 20 stops.',
                ],
                specialFeatures: ''
            }
        ]
    },
    {
        title: 'ELEVENTRA',
        contents: [
            {
                imageUrl: '/product-images/eleventra-01.jpg',
                contents: [
                    'Good Lift',
                    'Car Lift',
                ],
            },
            {
                imageUrl: '/product-images/eleventra-02.jpg',
                contents: [
                    'Strecher Lift',
                    'Service Lift',
                    'Scissor Lift'
                ],
            },
        ]
    },
]