import { useState } from 'react'
import Login from './components/Login';
import api from '../../utlis/api'
import { useSelector } from 'react-redux';
import type { RootState } from "../../utlis/state/store";
import { useNavigate } from 'react-router';
import { authenticateUser } from '../../utlis/state/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

type BoolProps = {
    isSignUp: boolean;
}

const Auth = (props : BoolProps) => {
  const authState = useSelector((sessionID : RootState) => sessionID)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(authState === "" ? false : true);
  const [incorrectAttempt, setIncorrectAttempt] = useState(false)
  const path = props.isSignUp ? "/signup" : "/login"
  const errorMessage = incorrectAttempt ? <h2 className='text-center text-red-500 text-3xl pt-20 pb-20'>Incorrect username/password!</h2> : ""
  const message = props.isSignUp ? "Signed up successfully! Please, return to the authentication screen"  : "Logged in!"

useEffect(() => {
    if (loggedIn) {
        navigate('/main')
    }
}, [])

  const authenticate = async (user : string, password : string) : Promise<void> => {
    setIncorrectAttempt(false)
    const loginInfo = {username: user, password: password};

    try {
        const result = await api.post(path, loginInfo)
        if (result.data !== "Incorrect username/password!") {
            dispatch(authenticateUser(result.data));
            setLoggedIn(true)
            navigate('/main')
        } else {
            setIncorrectAttempt(true)
        }
        //
    } catch (err) {
        console.log(err)
    }    
  }
        return (<>
        {errorMessage}
        <Login handleClick={authenticate} isSignUp={props.isSignUp} />
        </>)
}

export default Auth;