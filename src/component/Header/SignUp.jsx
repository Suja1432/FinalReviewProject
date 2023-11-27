
import React,{ useState}from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserData } from '../../Service/Userapi';
const SignUp = () => {
   const [data,setdata]=useState(
    {
    name:"",
    email:"",
    password:""
    }
   )
   const navigate=useNavigate();

    const handleSubmitChangeSignUp=(event)=>{
        event.preventDefault(); 
        UserData(data);   
        navigate('/Home')
       }

  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={(e)=>handleSubmitChangeSignUp(e)}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
          Already registered?
          <span className="link-primary">
           <Link to={'/signin'}>Sign In</Link> 
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g Jane Doe"
            required
            onChange={(e)=> setdata({...data,name:e.target.value})}
           
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            required
            placeholder="Email Address"
            onChange={(e)=> setdata({...data,email:e.target.value})}
           
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control mt-1"
            placeholder="Password"
            onChange={(e)=> setdata({...data,password:e.target.value})}
           
          />
        </div>
        <div className="d-grid gap-2 mt-3">
        <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
        </div>
      
      </div>
    </form>
    
  </div>
    
  )
}

export default SignUp