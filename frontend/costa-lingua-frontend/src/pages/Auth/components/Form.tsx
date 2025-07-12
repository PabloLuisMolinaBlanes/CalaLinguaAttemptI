import { useState } from "react";

interface FuncProps {
    handleClick: (user : string, password: string) => Promise<void>;
}

const Form = (props : FuncProps) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    return (<>
    <div id="form" className="flex flex-col">
        <div id="top" className="pb-20 flex flex-row">
            <div id="left" className="w-3/9"></div>
            <div id="center" className="w-3/9 border-1">
                <input type="text" value={username} className="w-10/10" onChange={handleUsername}></input>
            </div>
            <div id="right" className="w-3/9"></div>
        </div>
        <div id="center" className="pb-20 flex flex-row">
            <div id="left" className="w-3/9"></div>
            <div id="center" className="w-3/9 border-1">
                <input type="password" value={password} className="w-10/10" onChange={handlePassword}></input>
            </div>
            <div id="right" className="w-3/9"></div>
        </div>
        <div id="bottom" className="flex flex-row">
        <div id="left" className="w-3/9"></div>
        <div id="center" className="w-3/9 text-center bg-[#D95353] font-inter text-3xl h-30 flex flex-col cursor-pointer" onClick={() => {props.handleClick(username, password)}}>
            <div id="top" className="h-3/9">

            </div>
            <div id="right" className="h-3/9">
                <p>Enter</p>
            </div>
            <div id="bottom" className="h-3/9">

            </div>
        </div>
        <div id="right" className="w-3/9"></div>
        </div>
    </div>
    </>)
}

export default Form;