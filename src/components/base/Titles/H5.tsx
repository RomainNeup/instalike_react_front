export function H5(props: TitleProps): JSX.Element {
    return (
        <h5 className={`${props.className} text-primary text-xl font-medium tracking-tight`}>
            {props.children}
        </h5>
    )
}
