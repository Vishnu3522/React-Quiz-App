import React from 'react'
import { useState } from 'react'

const questionData = [
  {question: 'what is capital of india?',options:['berlin','paris','newdelhi'],correctAnswewr:'newdelhi'},
  {question :'Grand Central Terminal, Park Avenue, New York is the world?',options:['largest railway station','highest railway station','longest railway station'],correctAnswewr:'largest railway stataion'},
]

function Ques() {
  const [currentQuestion, SetCurrentQuestion]= useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClickAnswer = (selectedOption) => {
    if(selectedOption === questionData[currentQuestion].correctAnswewr){
       setScore(score+1);
    }
    if(currentQuestion < questionData.length-1){
      SetCurrentQuestion(currentQuestion+1);
    }
    else{
      setShowScore(true);
    }
  }
  return (
    <div>{showScore ?
      (
        <div>
          <p>your score is {score} out of {questionData.length}</p>
        </div>
      ) :
      (
        <div>
        <p>Question {currentQuestion + 1}/{questionData.length}</p>
          <h3>{questionData[currentQuestion].question}</h3>
          <ul>
            {questionData[currentQuestion].options.map((option,index) =>(
              <li key  = {index} onClick={() =>handleClickAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Ques