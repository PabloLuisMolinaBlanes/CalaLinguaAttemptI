import { useQuery } from "@tanstack/react-query";
import TableRow from "./TableRow";
import api from "../../../utlis/api";
import TableHeader from "./TableHeader";
import type { Questionnaire } from "../../../types/Questionnaire";

type TypeType = {id: number, name: string}[]


function Table() {
    const getQuestionnaires = async () => {
        const result = await api.get("/getTypes")
        const obtainedTypes : TypeType = await result.data;
        return obtainedTypes;
    }

    const {data, isPending} = useQuery({
        queryKey: ['questionnaires'],
        queryFn: getQuestionnaires,
    })

    const rows = isPending ? <div>Please, wait...</div> : data === undefined ? <div>Nothing found</div> : data.map((t : Questionnaire) => <TableRow name={t.id.toString().concat(" questionnaire")} type={t.name.concat(" questionnaire")} difficulty={t.name}/>)

    return (<>
        <table className="font-inter p-4">
        <TableHeader />
        {rows}
        </table>
    </>)
}

export default Table;