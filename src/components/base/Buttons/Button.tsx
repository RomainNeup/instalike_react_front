export function Button(props: ButtonProps): JSX.Element {
    return <div>
        <button
            className={`${props.className} w-full block rounded-md bg-transparent border border-primary p-2 text-primary hover:bg-primary hover:text-basic`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    </div>
}