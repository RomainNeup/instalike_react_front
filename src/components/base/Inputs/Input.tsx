export function Input(props: InputProps): JSX.Element {
    return (
        <div className={`${props.className} text-primary`}>
            <div className={"mb-2"}>
                <label v-if="label">{props.label}</label>
            </div>
            <input
                className="w-full block rounded-md bg-transparent border border-primary placeholder:text-primary/50 p-2"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}