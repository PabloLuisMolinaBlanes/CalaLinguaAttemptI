
function NavBar() {
    return (
        <>
        <div className="flex flex-row pb-40" id="navbar">
            <div id="right" className="">
            <p className="p-4 font-jojo font-bold">CostaLingua</p>
            </div>
            <div id="center" className="w-9/10"></div>
            <div id="left" className="flex flex-row">
            <p className="p-4 font-jojo">Play</p>
            <p className="p-4 font-jojo">Account</p>
            <p className="p-4 font-jojo">Logout</p>
            </div>
        </div>
        
        </>
    )
}

export default NavBar;