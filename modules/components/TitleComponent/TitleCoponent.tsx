interface TitleComponentProps {
    title: string
    className?: string
}

export const TitleComponent = ({title, className = ''}: TitleComponentProps) => {
    return (
        <div
            className={`bg-black p-8 text-center border-t border-white ${className}`}
            style={{
                backgroundImage: `url(/lines.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <h2 className="text-3xl primary-text-color">{title}</h2>
        </div>
    )
}