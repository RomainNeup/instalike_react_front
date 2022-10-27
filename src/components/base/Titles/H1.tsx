export function H1(props: TitleProps): JSX.Element {
    return (
        <h1 className={`${props.className} text-primary text-5xl font-black tracking-wider`}>
            {props.children}
        </h1>
    )
}
