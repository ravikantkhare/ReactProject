import { useState } from 'react'
import './product.css'

export default function Factorial()
{
    const[number , setNumber] = useState(1)
    const[result , setResult] = useState(1)
    const  claculateFactorial=()=>
    {
        let factorial=1;
        for(let i=1;i<=number;i++){
            factorial=factorial*i;
        }
        setResult(factorial);
       
    };
    
    return(
        <div class="container">
            <input type="number" class="btn2" value={number} onChange={(e)=>
                setNumber(parseInt(e.target.value))} ></input>
            <button onClick={claculateFactorial} class="btn">clicle</button>
            <p class="btn1">Factorial  of {number}is: {result}</p>
        
         
       
        </div>)
}  