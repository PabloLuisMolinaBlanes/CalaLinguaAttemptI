//import "./Auth.css"
import Form from "./Form";
import Title from "./Title";

type FuncProps = {
    handleClick: (user : string, password: string) => Promise<void>,
    isSignUp: boolean,
}

const Login = (props: FuncProps) => {
    return (<>
        <div id="login">
            < Title isSignUp={props.isSignUp} />
            < Form handleClick={props.handleClick} />
        </div>
        </>)
}

export default Login;