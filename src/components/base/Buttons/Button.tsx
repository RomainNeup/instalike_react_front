import clsx from "clsx";

export function Button(props: ButtonProps): JSX.Element {
    const componentClass = clsx(
        props.className,
        [
            "w-full",
            "block",
            "rounded-lg",
            "bg-transparent",
            "border",
            "px-2"
        ],
        {
            "p-1": props.size === "small",
            "p-2": props.size === "medium" || !props.size,
            "p-3": props.size === "large",
            "text-primary border-primary hover:bg-primary hover:text-basic": props.color === "primary" || !props.color,
            "text-secondary border-secondary hover:bg-secondary hover:text-basic": props.color === "secondary",
        }
    )
    return (
        <button
            className={componentClass}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}