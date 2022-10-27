import clsx from "clsx";

export function H1(props: TitleProps): JSX.Element {
    const componentClass = clsx(
        props.className,
        [
            "text-primary",
            "text-5xl",
            "font-black",
            "tracking-wider"
        ],
    )
    return (
        <h1 className={componentClass}>
            {props.children}
        </h1>
    )
}
