 import { useState } from "react"
import { Link } from "react-router-dom"
 
 function Home(){
        const data={
                name: '',
                email: '',
                password: ''
        }
        const [inputData, setInputData] = useState(data)
        const[msg, setMsg] = useState(false)
        const handerInput= (event)=>{
               
                setInputData({...inputData, [event.target.name]:event.target.value})

                //  setInputData mai jo bhi previes data hai use store krke rakhega
                //  [event.target.name] jo value name mai hai jaise name=name hai or name = emai hai ptachal jayegi 
                //  :event.target.value} isse hm value ko onChange kagenga over all isse hm update krrhe hai
                 }  
           const submit=(event)=>{
                 event.preventDefault()
                 if(!inputData.name ||!inputData.email || !inputData.password){
                 alert("ALL Fields are Mandatory")
                }else{
                        setMsg(true)
                        setTimeout(()=>{
                                setMsg(false)
                        },5000)
                }
           }       
         
    return(<>
            
           <button class="btn btn-primary"> Main<Link to="/" >Main</Link></button>
            <form onSubmit={submit} className="container text-center  ">
              
                <h1 className="text-success">Sineup</h1>
                <div className="row row-cols-1">
                        <div className="col gy-3">
                                 <input type="text" placeholder="name" name="name" value={inputData.name}onChange={handerInput}/> 
                        </div>
                         {/* onChange event ka use kiya jata hai jab hme kuch onChange karna ho */}
                         <div className="col gy-3">
                                 <input type="email" placeholder="Email" name="email" value={inputData.email} onChange={handerInput}/>
                        </div>
                        <div className="col gy-3">
                                <input type="password" placeholder="Password"  name="password" value={inputData.password} onChange={handerInput} />
                        </div>
                        <button  className="text-primary">Singnup</button>
                        <h1>{msg? inputData.name+":Singup Susscessfully":null}</h1> 
                </div>
                
            </form>
            
    </>)
}
export default Home