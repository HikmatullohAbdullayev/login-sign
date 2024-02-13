import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Signin from "../page/signin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MainLayout(props) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  },[token]);

  return <>{token ? <Outlet /> : <Signin />}</>;
}

export default MainLayout;
