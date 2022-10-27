export function H2(props: TitleProps): JSX.Element {
    return (
        <h2 className={`${props.className} text-primary text-4xl font-extrabold tracking-wider`}>
            {props.children}
        </h2>
    )
}
