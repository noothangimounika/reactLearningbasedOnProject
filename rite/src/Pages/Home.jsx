import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const userName=JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("loddedin");
    navigate("/login");
  }
  return (
    <div className='Home-Cotainer'>
      <p>Welcome {userName.name}</p>

      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home