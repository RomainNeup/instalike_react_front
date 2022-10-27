import clsx from "clsx";

export function Button(props: ButtonProps): JSX.Element {
    const componentClass = clsx(
        props.className,
        [
            "w-full",
            "block",
            "rounded-lg",
            "border"
        ],
        {
            "p-1": props.size === "small",
            "p-2": props.size === "medium" || !props.size,
            "p-3": props.size === "large",
    
            "border-primary": props.color === "primary" || !props.color,
            "border-secondary": props.color === "secondary",
            "border-basic": props.color === "basic",
    
            "bg-primary text-basic hover:text-primary": (props.color === "primary" || !props.color) && props.plain,
            "bg-secondary text-basic hover:text-secondary": props.color === "secondary" && props.plain,
            "bg-basic text-primary hover:text-basic": props.color === "basic" && props.plain,

            "text-primary hover:bg-primary hover:text-basic": (props.color === "primary" || !props.color) && !props.plain,
            "text-secondary hover:bg-secondary hover:text-basic": props.color === "secondary" && !props.plain,
            "text-basic hover:bg-basic hover:text-primary": props.color === "basic" && !props.plain,
    
            "hover:bg-transparent": props.plain,
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