import Input from "./input";
import Label from "./label";
import logo from "../assets/logo.png";
import google from "../assets/google.png";

export default function Form () {
    return (
        <div className="bg-branco flex flex-col flex-1 items-center justify-center font-sans">
            <img src={logo} alt="" />
            <div className="flex flex-col mt-12">
                <div className="flex flex-col">
                    <Label children="Username or email"/>
                    <Input type='text'/>
                </div>
                <div className="flex flex-col mt-3.5">
                    <Label children="Password"/>
                    <Input type="password"/>
                </div>
                <div className="flex justify-end mt-2.5">
                    <a href="" className="underline text-green-600">Forgot password?</a>
                </div>
                <button className="w-full py-2.5 bg-secondary rounded-md text-zinc-100 font-light mt-5 hover:bg-secondary/90">Sign in</button>
                <div className="flex items-center gap-5 mt-7">
                    <div className="w-10"></div>
                    <div className="border border-zinc-300 flex-1"></div>
                    <small className="text-zinc-500/90 font-normal text-sm">or</small>
                    <div className="border border-zinc-300 flex-1"></div>
                    <div className="w-10"></div>
                </div>
                <button className="flex items-center justify-center gap-4 w-full py-2.5 bg-transparent rounded-md text-zinc-500/90 font-normal mt-7">
                    <img src={google} alt="" width={25} />
                    Sign in with Google
                </button>
                <p className="text-zinc-500/90 font-normal mt-7 w-full text-center">Are you new? <a href="" className="underline text-green-600">Create an Account</a></p>
            </div>
        </div>
    )
}