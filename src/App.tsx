import React,{useState} from 'react';
 
import { fetchquizquestions } from './API';
import { Difficulty } from './API';
 
 
 
const total_questions=10;
const App= ()=> {

   

  const [loading,setloading]=useState(false);
  const [questions,setquestions]=useState([]);
  const[number,setnumber]=useState(0);
  const[useranswers,setuseranswers]=useState([]);
  const[score,setscore]=useState(0);
  const[gameover,setgameover]=useState(true);
  console.log(fetchquizquestions(total_questions,Difficulty.Easy))

  const StartTrivia = async()=>{

  }
const checkAnswer=(e:React. MouseEvent<HTMLButtonElement>)=>{

}
const nextQuestion = ()=>{}


  return (
    <div className ='App'>
      <h1>Fibr Quiz</h1>
      <button className ="start" onClick={StartTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/*< Questioncard
      questionNr={number+1}
      totalquestions={total_questions}
      question={questions[number].question}
      answers={questions[number].answer}
      useranswer={useranswers?useranswers[number]:undefined}
      callback={checkAnswer}

      
  />*/}
      <button className="next" onClick={nextQuestion}>
       NextQuestion
       </button>
    </div>
       );
}

export default App;
