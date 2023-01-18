
import { shuffleArray } from "./utils";

export type Question={
category: string;
correct_answer: string;
difficulty:string;
incorrect_answers:string[];
type:string;
question:string;
}

export type Questionstate = Question & {answers :string[]};






export enum Difficulty{
    Easy="easy",
    Medium ="medium",
    Hard="hard"
}






export const fetchquizquestions = async(amount:number ,difficulty:Difficulty)=>{
const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple' ;
const data= await(await fetch(endpoint)).json();
return data.results.map((question:Question)=>(

{
...question,
answers:shuffleArray([...question.incorrect_answers,question.correct_answer])

}




))


};
