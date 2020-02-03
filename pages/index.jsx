import Link from 'next/link';

export default function () {
    return (
        <div>
            <h1>
                hello world
            </h1>
            <Link href="/about" title="about">
                <a>About pages</a>
            </Link>
        </div>
    )
}