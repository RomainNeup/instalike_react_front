export function P(props: PProps): JSX.Element {
    return (
        <p className={`${props.className} text-primary text-base font-normal tracking-normal leading-relaxed`}>
            {props.children}
        </p>
    )
}