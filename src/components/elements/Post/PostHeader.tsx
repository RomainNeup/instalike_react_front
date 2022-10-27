import { Button, Image, P } from "../../../components/base";

export function PostHeader(props: PostHeaderProps) {
    return (
        <div className="flex flex-row space-x-4 mb-4">
            <div className="w-16 h-16">
                <Image src={props.avatar} alt={props.username} round />
            </div>
            <div>
                <P className="flex-none">{props.username}</P>
                <Button size="small">Follow</Button>
            </div>
        </div>
    )
}