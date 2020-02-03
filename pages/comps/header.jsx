import Link from 'next/link';

const LinkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/about">
            <a style={LinkStyle}>
                About pages
            </a>
        </Link>
        <Link href="/index">
            <a style={LinkStyle}>
                home pages
            </a>
        </Link>
    </div>
)

export default Header