import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<'label'> {
    children: string
}
export default function Label (props: LabelProps) {
    return (
        <label {...props} className="text-zinc-500/90 font-normal text-base">{props.children}</label>
    )
}