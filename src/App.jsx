import { useState } from 'react'

import './App.css'
import Home from './page/Home'
import Signin from './page/signin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-white'>

    {/* <Signin/> */}
     <Home/>
    </div>
  )
}

export default App
