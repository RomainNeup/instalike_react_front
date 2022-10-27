import './style.css'
export function Icon(props: IconProps): JSX.Element {
    return (
        <span className={`${props.className} material-symbols-rounded`}>{ props.name }</span>
    )
}