export function H4(props: TitleProps): JSX.Element {
    return (
        <h4 className={`${props.className} text-primary text-2xl font-semibold tracking-normal`}>
            {props.children}
        </h4>
    )
}
