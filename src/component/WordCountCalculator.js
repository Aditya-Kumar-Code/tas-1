import { useState } from "react";

function WordCountCalculator() {
    const [val,setVal]=useState('')
    const [wordCount,setWordCount]=useState(0)
    const handleChange=(event)=>{
        setVal(event.target.value);
        const data=event.target.value.split(' ');
        setWordCount(data.length); 
    }
    return (
        <div class="mt-5">
            <center>
                <h1 class="fw-600">Responsive Paragraph Word<br />Counter</h1>
                <input class="h5 fw-normal" value={val} onChange={(event)=>handleChange(event)} style={{width:"500px",height:"160px",paddingBottom:"90px",paddingLeft:"10px",border:"2px solid black"}} />
            </center>   
            <p class="text-secondary mt-4 h5" style={{marginLeft:"390px"}}>Word Count : {wordCount}</p>
            
        </div>
    )
}

export default WordCountCalculator;