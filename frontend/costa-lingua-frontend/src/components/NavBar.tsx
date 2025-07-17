import { useNavigate } from "react-router";

type Link = {
    name: string,
    path: string
}

function NavBar() {
    
    const links = [{name: "Play", path: "home"},{name: "Account", path: "login"},{name: "Logout", path: "logout"}]
    const linksTags = links.map((link : Link) => {
        return (<p className="p-4 font-jojo cursor-pointer" onClick={() => redirectLogin(link.path)}>{link.name}</p>)
    })

    let navigate = useNavigate()

    const redirectLogin = (path: string) : void => {
        navigate(path);
    }

    return (
        <>
        <div className="flex flex-row pb-40" id="navbar">
            <div id="right" className="">
            <p className="p-4 font-jojo font-bold">CostaLingua</p>
            </div>
            <div id="center" className="w-9/10"></div>
            <div id="left" className="flex flex-row">
                {linksTags}
            </div>
        </div>
        
        </>
    )
}

export default NavBar;