import React,{useState} from "react";


type Props ={
question :string;
answers:string[];
callback:any;
useranswer:any;
questionNr:number;
totalquestions:number;
}



const Questioncard: React.FC<Props>=({question,answers,callback,useranswer,questionNr,totalquestions}) => 
(<div>Questioncard
<p className="number">
    Question: {questionNr}/{totalquestions}


</p>
<p dangerouslySetInnerHTML={{__html:question}}/>
<div>
    {answers.map(answer=>(
<div>
<button disabled={useranswer} onClick={callback}>
    <span dangerouslySetInnerHTML={{__html:answer}}/>


</button>
    </div>
    )
    )
    
}</div>

</div>);

export default Questioncard;