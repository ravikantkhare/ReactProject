import { useState,useEffect } from "react";
function State()
{
    let [count,setcount] = useState(0)
    let [count1,setcount1] = useState(0)
    function handler()
    {
        count1++;
        setcount1(count1)
    }
    useEffect(()=>{
        setTimeout(()=>{count++;
            setcount(count)
        },1000)
    },[count1])
    return(<>
        <p>{count}</p>
        <button onClick={handler}>add{count1}</button>
    </>)
}
export default State