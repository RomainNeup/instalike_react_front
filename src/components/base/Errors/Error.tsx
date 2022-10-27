import { Icon } from "../Icons";
export function Error(props: ErrorProps): JSX.Element {
    return (
        <div className="bg-secondary w-full rounded-md p-4 text-basic">
            <Icon
                name="close"
                className="float-right cursor-pointer hover:text-basic/75"
                onClick={() => {}}
            />
            <b className="font-bold">Erreur ! </b>
            {props.message}
        </div>
    )
}