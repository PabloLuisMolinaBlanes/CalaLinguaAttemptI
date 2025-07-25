type BooleanProps = {
    isSignUp: boolean;
}

const Title = (props: BooleanProps) => {
    const suffix = props.isSignUp ? "up" : "in"
    return (<>
    <div id="title" className="flex flex-row pb-20">
        <div id="left" className="w-3/9 "></div>
        <div id="center" className="w-3/9 pt-5 text-center flex flex-col">
        <p className="font-jojo text-3xl pb-6">CalaLingua</p>
        <p className="font-jojo text-3xl">Bienvenido/a. Please, sign {suffix}</p>
        </div>
        <div id="right" className="w-3/9 "></div>
    </div>
    </>)
}

export default Title;