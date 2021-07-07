import {useEffect, useState} from "react";
import {quizzes} from "../const/quizzes";

let userAnswers = new Array(quizzes.length);
let countCorrect = 0;
export default function Quiz() {
    const [quizNumber, setQuizNumber] = useState(0);
    const [question, setQuestion] = useState(quizzes[quizNumber].question);
    const [isQuestion, setIsQuestion] = useState(true);
    useEffect(() => {
        setQuestion(quizzes[quizNumber].question);
    }, [quizNumber, isQuestion])

    function handleNavigateButton(step) {
        if (quizNumber + step < 0) return 0;
        if (quizNumber + step >= quizzes.length) {
            for (let i = 0; i < quizzes.length; i++)
                if (userAnswers[i] === quizzes[i].correct)
                    countCorrect++;
            setIsQuestion(false);
            return 0;
        }
        setQuizNumber(quizNumber + step);
    }
    if (isQuestion)
        return (
            <div>
                <h1>{question}</h1>
                <form>{quizzes[quizNumber].options.map((value, index) => {
                    return (
                        <div key={value}>
                            <input type="radio"
                                   className={"input" + index}
                                   onClick={() => {
                                       userAnswers[quizNumber] = quizzes[quizNumber].options[index]
                                   }}
                                   name="option"
                            />
                            <label htmlFor="input0">{value}</label>
                        </div>
                    )
                })}</form>
                <button onClick={() => handleNavigateButton(-1)}>prev</button>
                <button onClick={() => handleNavigateButton(1)}>next</button>
            </div>
        )
    return <div>You have {countCorrect} correct answers</div>
}