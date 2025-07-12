//import "./Auth.css"
import Form from "./Form";
import Title from "./Title";

interface FuncProps {
    handleClick: (user : string, password: string) => Promise<void>;
}

const Auth = (props: FuncProps) => {
    return (<>
        <div id="login">
            < Title />
            < Form handleClick={props.handleClick} />
        </div>
        </>)
}

export default Auth;