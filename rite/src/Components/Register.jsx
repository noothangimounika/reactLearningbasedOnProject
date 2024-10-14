import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';


const Register = () => {

  const navigate=useNavigate();

  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
  });


  //To store values in localStroage
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");
  }

  return (
    <div className="body">
      
    <div className='Register-Container'>
      <h1>Create An Account</h1>
      <form action="/" method='post' onSubmit={handleSubmit}>

        <input type="text"
        style={{marginTop:"50px"}}
        name='name' value={input.name}
        onChange={(e)=>
          setInput({
            ...input,[e.target.name] : e.target.value,
          })
        }
        required
        placeholder='Enter Name'
        />

        <input type="email"
        name='email' value={input.email}
        onChange={(e)=>
          setInput({
            ...input,[e.target.name] : e.target.value,
          })
        }
        placeholder='Enter Email'
        required
        />

        <input type="password"
        name='password' value={input.password}
        onChange={(e)=>
          setInput({
            ...input,[e.target.name] : e.target.value,
          })
        }
        required
        placeholder='Enter Password'
        />

       <button type='submit'>Restiger</button>

      </form>
      <div className='Link-Container' style={{display:"flex"}}> 
      <p>Have alredy an account</p>
       <Link to={"/login"}>
         <u>Login here</u>
       </Link>
  </div>
    
  
    </div>
    </div>
  )
}

export default Register
