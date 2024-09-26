import { useState } from 'react'
import './product.css'

export default function State()
{
    let[count , setCount] = useState(0)
    function incount()
    {
        count = count+1;
        console.log(count)
        setCount(count)
       
    }
    return(<>
        {
            (count>2&&count<10)
            ?
            
            <p><button class="btn1">{count}</button></p>
            :
            <p><button class="btn2">{count}</button></p>
        }
         
        <button onClick={incount} class="btn">clicle</button>
        </>)
}  