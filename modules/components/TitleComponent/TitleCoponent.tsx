import './TitleCoponent.css'

interface TitleComponentProps {
    title: string
}

export const TitleComponent = ({title}: TitleComponentProps) => {
    return (
        <div className="bg-black p-8 text-center border-t border-white" style={{
            backgroundImage: `url(/lines.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <h2 className="text-3xl primary-text-color">{title}</h2>
        </div>
    )
}