import { useState } from 'react'
import './product.css'

export default function Factorial()
{
    
    const[result , setResult] = useState(1)
    const  claculateFactorial=()=>
    {
       let result = 4;
        if(result%2==0)
            console.log("even")
       
        setResult(result);
       
    };
    
    return(
        <div class="container">
            
            <button onClick={claculateFactorial} class="btn">clicle</button>
            <p class="btn1">Factorial  of {result}is: {result}</p>
        
         
       
        </div>)
}  