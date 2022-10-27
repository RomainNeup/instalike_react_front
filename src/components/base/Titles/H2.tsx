import clsx from "clsx";

export function H2(props: TitleProps): JSX.Element {
    const componentClass = clsx(
        props.className,
        [
            "text-primary",
            "text-4xl",
            "font-extrabold",
            "tracking-wider"
        ],
    )
    return (
        <h2 className={componentClass}>
            {props.children}
        </h2>
    )
}
