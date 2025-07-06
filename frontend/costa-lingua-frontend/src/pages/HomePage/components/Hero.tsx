
function Hero() {
    return (
        <>
        <div id="hero" className="flex flex-row pb-30">
            <div id="left-left" className="w-2/10"></div>
            <div id="left" className="flex flex-col text-5xl w-3/10 pl-4 font-inter">
                <div id="top" className="h-4/10"></div>
                <div id="center" className=" h-3/10">
                    <p>Your platform for learning spanish</p>
                <div id="bottom" className=" h-3/10"></div>
                </div>
            </div>
            <div id="center" className=" w-1/10"></div>
            <div id="right" className="">
                <img src="./logo.png"></img>
            </div>
        </div>
        </>
    )
}

export default Hero;