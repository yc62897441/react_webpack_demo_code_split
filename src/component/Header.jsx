import { Link } from 'react-router-dom'

const urls = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'A',
        url: '/A',
    },
    {
        name: 'B',
        url: '/B',
    },
    {
        name: 'C',
        url: '/C',
    },
]

function Header() {
    return (
        <div>
            {urls?.length > 0 &&
                urls.map((item) => (
                    <Link key={item.url} to={item.url}>
                        {item.name}
                    </Link>
                ))}
        </div>
    )
}

export default Header
