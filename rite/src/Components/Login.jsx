
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate();

  const [input,setInput]=useState({
    email:"",
    password:"",
  });

  
  const handleLogin=(e)=>{
    e.preventDefault();
    const loggeduser=JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password===loggeduser.password){
      
      localStorage.setItem("loggeduser", true)
      navigate("/");
    }
    else{
      alert("Wrong Email of Password");
    }
  }

  return (
   <div className="body">
     <div className='Login-Container'>
      <h1>Login</h1>
      <form action="/" method='post' onSubmit={handleLogin}>

<input type="email"
style={{marginTop:"70px"}}
name='email' value={input.email}
onChange={(e)=>
  setInput({
    ...input,[e.target.name] : e.target.value,
  })
}
required
placeholder='Enter Email'
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

<button type='submit'>Login</button>

</form>
  <div className='Link-Container' > 
  <p>Don't have an account</p>
  <Link to={"/register"}>
  <u>Register here</u>
  </Link>
  </div>

    </div>
   </div>
  )
}

export default Login