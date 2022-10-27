export function Image(props: ImageProps): JSX.Element {
    return (
        <img
            className={`${props.className} ${props.round ? "rounded-full" : "rounded-lg"} ${props.border && "border border-" + props.border} object-cover w-full h-full`}
            src={props.src}
            alt={props.alt}
        />
    )
}