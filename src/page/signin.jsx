import React from 'react';

function Signin(props) {
    return (
        <div className=' flex flex-col  justify-center items-center w-[600px] mx-auto h-screen p-3'>
            <h1 className=' font-semibold text-2xl p-5 '>Sign in</h1>
            <form className=' flex flex-col  justify-center w-full bg-slate-200  gap-5  p-5 rounded-lg ' > 
                <div className=' flex flex-col  justify-center  mx-auto   w-[500px]'>
                    <label htmlFor="email">email</label>
                    <input className=' rounded-lg  my-2 p-2' type="email" name="email" id="email" placeholder='Email' required />
                </div>
                <div className=' flex flex-col  justify-center  mx-auto w-[500px]'>
                    <label htmlFor="password">password</label>
                    <input className=' rounded-lg my-2 p-2' type="password" name="password" id="password" placeholder='Password' required />
                </div>
                <div className='text-center '>
                    <button  className='w-[500px] rounded-lg mx-auto p-2 bg-cyan-300'  type='submit'>Yuborish</button>
                </div>
            </form>
        </div>
    );
}

export default Signin;