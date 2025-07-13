import { useState } from 'react'
import Login from './components/Login';
import api from '../../utlis/api'

type BoolProps = {
    isSignUp: boolean;
}

const Auth = (props : BoolProps) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [incorrectAttempt, setIncorrectAttempt] = useState(false)
  const path = props.isSignUp ? "/signup" : "/login"
  const errorMessage = incorrectAttempt ? <h2 className='text-center text-red-500 text-3xl pt-20 pb-20'>Incorrect username/password!</h2> : ""
  const message = props.isSignUp ? "Signed up successfully! Please, return to the authentication screen"  : "Logged in!"

  const authenticate = async (user : string, password : string) : Promise<void> => {
    setIncorrectAttempt(false)
    const loginInfo = {username: user, password: password};

    try {
        const result = await api.post(path, loginInfo)
        if (result.data !== "Incorrect username/password!") {
            setloggedIn(true);
        } else {
            setIncorrectAttempt(true)
        }
        //
    } catch (err) {
        console.log(err)
    }    
  }

    if (loggedIn) {
        return (<>
        <h2>{message}</h2>
        </>)
    } else {
        return (<>
        {errorMessage}
        <Login handleClick={authenticate} isSignUp={props.isSignUp} />
        </>)
    }
}

export default Auth;