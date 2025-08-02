type Props = {
    id: string
    name: string,
    type: string,
    difficulty: string,
}
import { useNavigate } from "react-router"
import type { NavigateFunction } from "react-router"

function handleClick(id : string, nav : NavigateFunction) {
    nav(`/questionnaire/${id}`)
}

const TableRow = (props : Props) => {
    const nav = useNavigate()
    return (<>
    <tr>
        <td onClick={() => handleClick(props.id, nav)} className="font-bold text-2xl pr-4 cursor-pointer hover:bg-sky-700">{props.name}</td>
        <td className="font-bold text-2xl pr-4">{props.type}</td>
        <td className="font-bold text-2xl">{props.difficulty}</td>
    </tr>
    </>)
}

export default TableRow;