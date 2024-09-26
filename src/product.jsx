import './Product.css'
function myfunction()
{
    document.getElementById("demo").innerHTML="hello event dandiling";
   
}

function Product({title,price}){

    return(<>
    <div className="box" >
        <h1>project title:-{title}</h1>
        <h1>project price:-{price}</h1>
        <button onClick={myfunction}>click here</button>
        <h1><p id="demo"></p></h1>
    </div>
    </>)
}
export default Product