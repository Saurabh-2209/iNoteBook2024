import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
const Login = () => {
    const [credintials, setCredintials] = useState({email : "", password : ""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
  
            },
            body: JSON.stringify({email: credintials.email,password : credintials.password})
          });
          const json = await response.json()
          console.log(json);
          if(json.success ){
            localStorage.setItem('token' ,json.authtoken);
            navigate("/")
          }
          else{
            alert("Invalid credintials");
          }
        
    }

    const onChange=(e)=>{
        setCredintials({...credintials, [e.target.name] : e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credintials.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credintials.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
