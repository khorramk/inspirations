import Layouts from './comps/layouts';
import Link from 'next/link';
const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
<a>{props.id}</a>
        </Link>
    </li>
)
export default function () {
    return (
        <div>
            <Layouts>
                <h1>
                    hello world
                </h1>
                <ul>
                    <PostLink id="hello"></PostLink>
                    <PostLink id="LEarn"></PostLink>
                    <PostLink id="Deploy"></PostLink>
                    <PostLink id="delete"></PostLink>
                </ul>
            </Layouts>
        </div>
    );
}