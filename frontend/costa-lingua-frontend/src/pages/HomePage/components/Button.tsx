import { use } from "react";
import { useNavigate } from "react-router";

function Button() {

    let navigate = useNavigate()

    const redirectLogin = () : void => {
        navigate('login');
    }

    return (
        <>
        <div id="button" className="flex flex-row font-inter font-bold text-3xl pb-16 h-50 cursor-pointer" onClick={redirectLogin}>
            <div id="left" className="w-17/100"></div>
            <div id="center" className="w-66/100 text-center bg-[#D95353] flex flex-col">
                <div id="top" className="h-33/100"></div>
                <div id="center" className="h-33/100">
                <p>Sign Up</p>
                </div>
                <div id="bottom" className="h-33/100"></div>
                
            </div>
            <div id="right" className="w-17/100"></div>
        </div>
        </>
    )
}

export default Button;