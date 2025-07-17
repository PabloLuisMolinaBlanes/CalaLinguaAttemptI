type Props = {
    name: string,
    type: string,
    difficulty: string,
}

const TableRow = (props : Props) => {
    return (<>
    <tr>
        <td className="font-bold text-2xl pr-4">{props.name}</td>
        <td className="font-bold text-2xl pr-4">{props.type}</td>
        <td className="font-bold text-2xl">{props.difficulty}</td>
    </tr>
    </>)
}

export default TableRow;