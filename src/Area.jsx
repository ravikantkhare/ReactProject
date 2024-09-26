 function Area(){
    
   const r =parseInt(prompt("enter radius "));
    const area=(3.14*r*r);
    return(<>
        <div class="pera">
            <p >Area of curcle: {area}</p>
        </div>
        </>)
        
}
export default Area