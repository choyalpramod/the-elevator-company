const presenceList = [
    "Delhi NCR",
    "Rajasthan",
    "Uttar Pradesh",
    "Punjab",
    "Vizag",
    "Haryana",
]

export const Presence = () => {
    return (
        <section className="flex flex-col items-center gap-4 py-8 bg-black primary-text-color">
            <h2 className="text-3xl">
                Our Presence
            </h2>
            <div className="flex justify-center text-white">
                {presenceList.map((presence, index) => (
                    <div className="px-3 text-xl" key={`presence-${presence}-${index}`}>{presence}</div>
                ))}
            </div>
        </section>
    )
}