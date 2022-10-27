import { Link } from "react-router-dom";
import { H3, Image } from "../";

export function Header(props: LayoutProps): JSX.Element {
    return (
        <div className={`${props.className} p-8 flex justify-between`}>
            <Link to="/">
                <H3>InstaLike</H3>
            </Link>
            <Link to="/" className={`${props.className} w-12 h-12`}>
                <Image
                    round
                    border="secondary"
                    alt="PP"
                    src="https://media.istockphoto.com/photos/portrait-of-beautiful-woman-lit-by-neon-colored-lights-picture-id1313668357?b=1&k=20&m=1313668357&s=170667a&w=0&h=u-rsR__qiTfquxVEqYN2JKh5fNM7tr8okJcLU21rDKU="
                />
            </Link>
        </div>
    )
}