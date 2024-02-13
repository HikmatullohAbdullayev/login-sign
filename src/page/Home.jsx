import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home(props) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
          navigate("/");
        } else {
          navigate("/login");
        }
      },[token])

    const clearData = () =>{
        localStorage.clear()
        navigate("/login")
    }

    return (
        <div className='h-screen text-center ' >
            <h1 className='font-extrabold text-[100px] text-center  '>👍</h1>
            <button className='font-bold text-[50px] mt-[30px]  w-[250px] px-2 py-4 rounded-lg bg-blue-500  ' onClick={() => clearData()}>Chiqish</button>
        </div>
    );
}

export default Home;