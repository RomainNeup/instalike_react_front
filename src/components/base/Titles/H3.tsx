export function H3(props: TitleProps): JSX.Element {
    return (
        <h3 className={`${props.className} text-primary text-3xl font-bold tracking-wide`}>
            {props.children}
        </h3>
    )
}
