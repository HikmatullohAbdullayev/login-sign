import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
  } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../page/Home"
import Signin from "../page/signin"

  export const router = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="login" element={<Signin/>}/>
        </>
    )
  )