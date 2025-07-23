import Front from "./components/Front";
import NavBar from "../../components/NavBar";
import Title from "./components/Title";
import Table from "./components/Table";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useNavigate, type NavigateFunction } from 'react-router';
import { checkAuthState } from "../../utlis/auth";
import type { RootState } from "../../utlis/state/store";



function MainPage() {

  const authState = useSelector((sessionID : RootState) => sessionID)
  const navigate = useNavigate()

  // Implements auth functionality on the client
  useEffect(() => {
    checkAuthState(authState, navigate)
  }, [])

    return (<>
        <div id="front" className="invisible">
          <Front />
        </div>
        <div id="back">
          <NavBar />
          <Title />
          <Table />
        </div>
        </>)
}

export default MainPage;