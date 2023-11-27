import React ,{useEffect, useRef, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../Service/Userapi';

const SigIn = () => {
  const [data,setdata]=useState([]);

  useEffect(()=>
  {
    const fetchData =async()=>
    {
       await getUserData ()
       .then((ress)=>setdata(ress.data))// inbuild data
       .catch((e)=>console.error(e));
    }
    fetchData();
  },[]);

    const nameRef=useRef();
  const passwordRef=useRef();

const navigate=useNavigate();
    const handleSubmitChangeSignIn=(event)=>{
        event.preventDefault();
        const name =nameRef.current.value;
        const password =passwordRef.current.value;
      const somedata=data.findIndex((props)=>props.email===name);
      console.log(somedata)
      if( somedata!==-1&& data[somedata].password===password) {
          navigate('/Home');
        
      }
 
      else if(somedata===-1)
      {
        alert("invalid password/emailid");
        navigate('/signin');
      }
       }

      
  return (
<div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(event)=>handleSubmitChangeSignIn(event)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <span className="link-primary" > 
                    <Link to={'/'}> Sign Up </Link> 
              </span>

            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={nameRef}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={passwordRef}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
             
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              
            </div>
            <p className="text-center mt-2">
             <Link to={'/forget'}> Forgot password?</Link>
            </p>
          </div>
        </form>
      </div>
 
  )
}


export default SigIn