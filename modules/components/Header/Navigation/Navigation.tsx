interface NavigationItemType {
    routePath: string
    label: string
    children?: NavigationItemType[]
}

const navigationList: NavigationItemType[] = [
    {
        routePath: '/home',
        label: 'Home'
    },
    {
        routePath: '/home',
        label: 'Home'
    },
    {
        routePath: '/home',
        label: 'Home'
    },
    {
        routePath: '/home',
        label: 'Home'
    },
    {
        routePath: '/home',
        label: 'Home'
    },
]
export const Navigation = () => {
    return (
        <div>
            Navigation
        </div>
    )
}