import Image from 'next/image'

export const Journey = () => {
    return (
        <div className="flex items-center gap-2">
            <section className="flex-1">
                <header>
                    <h1 className="text-4xl text-center py-6">Our Journey</h1>
                </header>
                <article>
                    <p>
                        The Elevator Company has established itself as a leading name in the luxury elevator market.
                        With over 23 years of industry experience, our team combines the expertise of seasoned
                        professionals with the fresh perspective of a dynamic, young workforce. We are dedicated to
                        elegance and innovation, which has led to our prestigious partnership with a renowned Italian
                        brand. This Indo-Italian collaboration brings together the best of Italian design and
                        engineering excellence, ensuring our clients receive state-of-the-art elevator technology
                        alongside bespoke, sophisticated designs. Our elevators not only elevate spaces but also bring a
                        touch of luxury that redefines modern living and working environments.
                    </p>
                </article>
            </section>
            <div className="flex-1 flex justify-center">
                <Image src="/journey.jpg" alt="the-elevator-company-journey" height={500} width={500}/>
            </div>
        </div>
    )
}