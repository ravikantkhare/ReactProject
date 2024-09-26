import { useEffect, useState } from "react";
export default function useEffect()
{
    let[count, setcount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setcount((count)=>count+1)
        },1000)
    },[6])
}
return (<>
<p>{count}</p>
<button onClick={()=>{
    count =count+1;
    setcount(count)
}}>clicle</button>
</>)