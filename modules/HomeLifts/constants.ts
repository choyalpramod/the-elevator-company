import {ImageUrlType} from "@/modules/components/Banner";
import {ProductType} from '@/modules/components/ProductView'

export const imageUrls: ImageUrlType[] = [
    {
        imageUrl: '/home-lifts/wall-paper/wall-paper-1.jpg',
        content: 'Introducing our luxury home elevator, designed to seamlessly integrate into your existing residence with minimal civil changes. Adhering to stringent European safety standards, this elevator offers effortless installation for both indoor and outdoor settings.'
    },
    {
        imageUrl: '/home-lifts/wall-paper/wall-paper-2.jpg',
        content: 'In order to protect passengers in the event of a malfunction, our elevators are outfitted with a number of safety features, such as emergency brakes, OSG, Hydraulic Suspension/ Seismic absorber, and ARD/ERD. For your smart home elevator we offer you AENS , VCFS, Biometric Integrations and Automation.'
    },
];

export const homeLifts: ProductType[] = [
    {
        title: 'Felix',
        contents: [{
            imageUrl: '/product-images/felix-01.jpg',
            title: 'Hydraulic',
            contents: [
                'Compliance: Meets European Machinery Directive 2006/42/EC',
                'Mechanism: Hydraulic with a smooth operating speed of 0.3 - 0.5 m/s',
                'Compatible with single-phase power',
                'Number of Stops: Upto 6 stops',
                'Indoor / Outdoor',
                'Space-Saving Design: Minimum pit requirement of just 200 mm and headroom clearance of 2800mm',
                'Eco-Friendly Feature: Using energy only while accenting'
            ],
        }]
    },
    {
        title: 'Felix 2.0',
        contents: [{
            imageUrl: '/product-images/felix-02.png',
            title: 'Belt-Drive',
            contents: [
                'Following European Machinery Directive 2006/42/EC',
                'Mechanism: Gearless Traction Mechanism',
                'Speed 0.4-1m/s',
                'Compatible with single-phase power',
                'Number of Stops: Upto 6 stops',
                'Indoor / Outdoor',
                'Minimum pit required 200mm'
            ],
            specialFeatures: 'Uses durable, high-strength belts instead of traditional steel cables, resulting in reduced wear and tear, increased lifespan, and quieter performance. Utilizes a gearless motor for smooth, quiet, and efficient operation without the need for a gearbox'
        }]
    },
    {
        title: 'CLIMBER X',
        contents: [{
            contents: [
                'Compliance: Meets European Machinery Directive 2006/42/EC',
                'Mechanism: Rack and Pinion Mechanism',
                'Smooth operating speed of 0.10 - 0.15 m/s',
                'Compatible with single phase',
                'Indoor/Outdoor',
                'Space-Saving Design: Can be easily install in a stair case having stair width of 900mm',
                'Eco-Friendly Feature: Power-efficient, Having a motor of 24vdc motor that operate on chargeable battery'
            ],
            imageUrl: '/product-images/climber-x-01.png',
        }]
    },
    {
        title: 'PNEUMATIC ELEVATOR',
        contents: [{
            imageUrl: '/product-images/pneumatic-01.jpg',
            title: 'Vacuum 100',
            contents: [
                'Drive System: Pneumatic vacuum technology using air pressure',
                'Lift Capacity: Up to 220 kg (485 lbs)',
                'Number of Passengers: 2 to 4 passengers (depending on model)',
                'Travel Speed: 0.15 m/s (15 cm/s)',
                'Power Supply: Single-phase power (220V)',
                'Stops: Up to 5 stops (15 meters maximum travel height)',
                'Installation: Self-supporting structure, no pit, shaft, or machine room required',
                'Safety Features: Emergency brakes, battery backup, and safety locks',
                'LEC (Low Energy Consumption)',
            ],
        }]
    },
]