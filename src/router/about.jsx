import { Link } from "react-router-dom"


function About()
{
    return(<>
        <h1>this is about page</h1>
        <Link to="/">Main</Link>
        <div className="container">
            <form action="">
                <div className="nb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control"id="name" />
                </div>
                <div className="nb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control"id="email" />
                </div>
                <div className="nb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control"id="passsword" />
                </div>
            </form>
        </div>
    
    </>)
}
export default About