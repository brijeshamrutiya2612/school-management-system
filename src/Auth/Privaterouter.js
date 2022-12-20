import React from "react";
import { useSelector } from "react-redux";
import {Outlet} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Sidebar from "../Admincomponents/Sidebar";

export default function Privaterouter() {
  const {adminInfo} = useSelector((state)=>state.admin);
  return adminInfo && adminInfo.isAuthenticated ? <Sidebar><Outlet/></Sidebar> : <Navigate to="/login" />;
}


