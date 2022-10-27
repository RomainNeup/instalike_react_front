export function Input(props: InputProps): JSX.Element {
    return (
        <div className={`${props.className} text-primary`}>
            <div className={"mb-2"}>
                <label v-if="label">{props.label}</label>
            </div>
            <input
                className={`${!props.noBorder && "border border-primary p-2"} w-full block rounded-md bg-transparent placeholder:text-primary/50 px-2`}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}