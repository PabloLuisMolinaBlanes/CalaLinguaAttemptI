import ReactImage from "../assets/react.svg";


function Hero() {
    return (
        <>
        <div id="hero" className="flex max-lg:flex-col lg:flex-row pb-30">
            <div id="left" className="lg:w-3/9 sm:text-left max-sm:text-center"><p>Your platform for learning Spanish</p></div>
            <div id="center" className="lg:w-3/9 max-lg:w-9/9"></div>
            <div id="right" className="lg:w-3/9 max-lg:w-9/9"><img src="https://placehold.co/512x512"></img></div>
        </div>        
        </>
        /*
        <>
            <div id="hero" className="flex max-lg:flex-col lg:flex-row pb-30">
                <div id="left" className="w-3/9">
                </div>
                <div id="center" className="w-3/9 flex max-lg:flex-col max-lg:text-center font-inter text-3xl">
                    <p className="pb-5 lg:pr-40">Your platform for learning Spanish</p>
                </div>
                <div id="right" className="w-3/9">
                    <img src="https://placehold.co/512x512"></img>
                </div>
            </div>
        </>
        /*
        <>
        
        <div id="hero" className="flex sm:flex-col md:flex-col pb-30">
            <div id="left-left" className="w-2/10"></div>
            <div id="left" className="flex sm:flex-col md:flex-col text-5xl w-3/10 pl-4 font-inter">
                <div id="top" className="h-4/10"></div>
                <div id="center" className=" h-3/10">
                    <p>Your platform for learning spanish</p>
                <div id="bottom" className=" h-3/10"></div>
                </div>
            </div>
            <div id="center" className=" w-1/10"></div>
            <div id="right" className="">
                <img src={ReactImage}></img>
            </div>
        </div>
        </>
        */
    )

}

export default Hero;