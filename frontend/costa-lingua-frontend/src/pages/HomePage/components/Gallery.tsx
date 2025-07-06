
function Gallery() {
    return (
        <>
        <div id="gallery" className="flex flex-col pb-32 font-inter text-xl">
            <div id="top" className="flex flex-row  pb-16">
                <div id="left" className=" flex flex-col pl-4 w-33/100">
                    <div id="image" className="border-1 h-100"></div>
                    <div id="text" className="pt-4">
                        <p>Get access to incredible questionnaires, curated by native speakers!</p>
                    </div>
                </div>
                <div id="center" className=" w-33/100"></div>
                <div id="right" className=" flex flex-col pr-4 w-33/100">
                    <div id="image" className="border-1 h-100"></div>
                    <div id="text" className="pt-4">
                        <p>Create all learning materials you need with a few clicks!</p>
                    </div>
                </div>
            </div>
            <div id="bottom" className="flex flex-row ">
                <div id="left" className=" flex flex-col pl-4 w-33/100">
                    <div id="image" className="border-1 h-100"></div>
                    <div id="text" className="pt-4">
                        <p>Go check out our forums, and find a lovely community always willing to help</p>
                    </div>
                </div>
                <div id="center" className=" w-33/100"></div>
                <div id="right" className=" flex flex-col pr-4 w-33/100">
                    <div id="image" className="border-1 h-100"></div>
                    <div id="text" className="pt-4">
                        <p>Ask for a meeting with our native Spanish speakers for personal, one-on-one sessions; or group sessions.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Gallery;