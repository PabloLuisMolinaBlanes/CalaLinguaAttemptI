import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { checkAuthState } from "../../utlis/auth"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../utlis/state/store"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import type { QuestionnairePlay } from "../../types/QuestionnairePlay"
import api from "../../utlis/api"

function QuestionnairePage() {

    const authState = useSelector((sessionID : RootState) => sessionID)
    const navigate = useNavigate()
    let params = useParams()

    const [answer, setAnswer] = useState("")
    const [questionnaire, setQuestionnaire] = useState<QuestionnairePlay[] | []>([])
    const [title, setTitle] = useState("")
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    /*
    // Implements auth functionality on the client
    useEffect(() => {
        checkAuthState(authState, navigate)
    }, [])
*/
    const getQuestionnaires = async () => {
        const result = await api.get(`/getQuestions?id=${params.id}`)
        const obtainedQuestions : QuestionnairePlay[] = await result.data;
        setQuestionnaire(obtainedQuestions)
        setTitle(obtainedQuestions[0].correct_answer)
        return obtainedQuestions;
    }

    const {data, isPending} = useQuery({
        queryKey: ['questionnaires'],
        queryFn: getQuestionnaires,
    })

    const handleClick = () => {
        if (answer === questionnaire[currentQuestionIndex].question) {
          console.log("Correct!");
          setCurrentQuestionIndex((currentQuestionIndex + 1) % questionnaire.length);
        } else {
          console.log("Incorrect");
        }
      }

      useEffect(() => {
        if (questionnaire[currentQuestionIndex] === undefined) {
          setTitle("Test finished!")
        } else {
          setTitle(questionnaire[currentQuestionIndex].correct_answer)
        }
      }, [currentQuestionIndex])

      function handleAnswer (e : React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value)
      }


    return (<>
    <div id="container" className="flex flex-row p-4">
    <div id="left" className="w-3/9"></div>
    <div id="center" className="w-3/9">
    <h1 className="text-3xl font-bold font-inter pb-12">¿Qué significa lo siguiente en inglés?</h1>
    <h1 className="text-3xl font-bold font-inter pb-6">{title}</h1>
    <input type="text" value={answer} className="w-10/10 pb-4" onChange={handleAnswer}></input>
    <div id="center" className="w-9/9 text-center bg-[#D95353] font-inter text-3xl h-30 flex flex-col cursor-pointer" onClick={() => {handleClick()}}>
    <div id="top" className="h-3/9">
</div>
<div id="right" className="h-3/9">
    <p>Enter</p>
</div>
<div id="bottom" className="h-3/9">

</div>
    </div>
    </div>
    <div id="right" className="w-3/9"></div>
    </div>
    <div id="correctness" className="flex flex-row">
      <div id="left" className="w-5/6">
        Image here
      </div>
      <div id="right" className="w-1/6">
        Correct/Incorrect
      </div>
    </div>
    </>)
}

export default QuestionnairePage;