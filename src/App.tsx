import React,{useState} from 'react';
 
import { fetchquizquestions } from './API';
import { Questionstate,Difficulty } from './API';
 
 
 type AnswerObject={
   question:string;
   answer:string;
   correct:boolean;
   correctanswer:string;
   

 }
const total_questions=10;
const App= ()=> {

   

  const [loading,setloading]=useState(false);
  const [questions,setquestions]=useState<Questionstate[]>([]);
  const[number,setnumber]=useState(0);
  const[useranswers,setuseranswers]=useState<AnswerObject[]>([]);
  const[score,setscore]=useState(0);
  const[gameover,setgameover]=useState(true);
  console.log(questions);

  const StartTrivia = async()=>{
setloading(true);
setgameover(false);

const newQuestions=await fetchquizquestions(total_questions,Difficulty.Easy);
setquestions(newQuestions);
setscore(0);
setuseranswers([]);
setnumber(0);
setloading(false);


  }
const checkAnswer=(e:React. MouseEvent<HTMLButtonElement>)=>{

}
const nextQuestion = ()=>{}


  return (
    <div className ='App'>
      <h1>Fibr Quiz</h1>
      {gameover||useranswers.length===total_questions?(
      <button className ="start" onClick={StartTrivia}>
        Start 
      </button>):null}
      {!gameover?<p className="score">Score:</p>:null}
     {loading&& <p>Loading Questions...</p>}
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
