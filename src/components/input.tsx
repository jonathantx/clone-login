import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
    type: string;
}

export default function Input ({type}: InputProps) { 
    return (
        <input type={type} className="w-80 py-2 px-3 border border-zinc-200 rounded-md outline-none" />
    )
}