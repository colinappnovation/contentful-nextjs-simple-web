import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <ul className="flex">
            <li key="home" className="mr-6">
            <Link href="/">
                <a className="block mr-4 text-white hover:font-extrabold">Home</a>
            </Link>
            </li>
        </ul>
        </div>
    )
}

export default Header