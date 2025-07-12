import { useState } from 'react'
//import callAuthServer from './utils/api'
import Login from './components/Login';
import api from '../../utlis/api'

function Auth() {
  const [loggedIn, setloggedIn] = useState(false);
  const authenticate = async (user : string, password : string) : Promise<void> => {

    const loginInfo = {username: user, password: password};

    try {
        const result = await api.post('/login', loginInfo)
        if (result.data !== "Incorrect username/password!") {
            setloggedIn(true);
        } else {
            console.log(result.data);
        }
        //
    } catch (err) {
        console.log(err)
    }    
  }

    if (loggedIn) {
        return (<>
        <h2>Logged in!</h2>
        </>)
    } else {
        return (<>
        <Login handleClick={authenticate} />
        </>)
    }
}

export default Auth;