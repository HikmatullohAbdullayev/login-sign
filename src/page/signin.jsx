import React, { useEffect, useRef, useState } from 'react';
import { axiosPost } from '../service/axios';
import { useNavigate } from 'react-router-dom';


function Signin(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate()


  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
    

const submit = (e) =>{
    e.preventDefault()

axiosPost.post("login",
    {
        "email": emailRef.current.value,
        "password": passwordRef.current.value
    
})
.then(function (response) {
    setToken(localStorage.setItem("token", JSON.stringify(response.data.token)))
    navigate("/")
  })
  .catch(function (error) {
    console.log(error);

    
  })



  
emailRef.current.value = ("")
passwordRef.current.value = ("")
}



    return (
      <div className=" flex flex-col  justify-center items-center w-[600px] mx-auto h-screen p-3">
        <h1 className=" font-semibold text-2xl p-5 ">Sign in</h1>
        <form  onSubmit={submit} className=" flex flex-col  justify-center w-full bg-slate-200  gap-5  p-5 rounded-lg ">
          <div className=" flex flex-col  justify-center  mx-auto   w-[500px]">
            <label className='font-semibold' htmlFor="email">Email <span className='font-medium italic text-blue-700 ml-5'>Email uchun: " eve.holt@reqres.in " </span></label>
            <input
              ref={emailRef}
              className=" rounded-lg  my-2 p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className=" flex flex-col  justify-center  mx-auto w-[500px]">
            <label htmlFor="password">Password <span className='font-medium italic text-blue-700 ml-5'>Password uchun: " cityslicka " </span></label>
            <input
             ref={ passwordRef}
              className=" rounded-lg my-2 p-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="text-center ">
            <button
              className="w-[500px] rounded-lg mx-auto p-2 bg-cyan-300"
              type="submit"
            >
              Yuborish
            </button>
          </div>
        </form>
      </div>
    );
}

export default Signin;