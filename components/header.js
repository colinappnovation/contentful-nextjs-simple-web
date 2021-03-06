import Link from 'next/link'
import HeadMeta from './head';

const Header = () => {
    return (
        <>
        <HeadMeta/>
        <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <ul className="flex">
            <li key="home" className="mr-6">
            <Link href="/">
                <a className="block mr-4 text-white hover:font-extrabold">Home</a>
            </Link>
            </li>

            <li key="apollo-enabled" className="mr-6">
            <Link href="/apollo-version">
                <a className="block mr-4 text-white hover:font-extrabold">Home(Apollo)</a>
            </Link>
            </li>

            <li key="prismic" className="mr-6">
            <Link href="/prismic">
                <a className="block mr-4 text-white hover:font-extrabold">Home(Prismic)</a>
            </Link>
            </li>

            <li key="contact-us" className="mr-6">
            <Link href="/contact-us">
                <a className="block mr-4 text-white hover:font-extrabold">Contact Us</a>
            </Link>
            </li>


        </ul>
        </div>
        </>
    )
}

export default Header