import { Link as ReactLink } from "react-router-dom";

export function Link(props: LinkProps): JSX.Element {
    return (
        <div>
            <ReactLink
                className={`${props.className} w-full block rounded-md bg-transparent text-primary hover:text-primary/75 text-start underline`}
                to={props.to}
            >
                {props.children}
            </ReactLink>
        </div>
    )
}