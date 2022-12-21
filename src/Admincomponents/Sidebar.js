import React, { useState } from "react";
import { FaBars, FaTh } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { TbArrowBarToLeft,TbArrowBarToRight } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineEventNote } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./css/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/student",
      name: "Student",
      icon: <FiUsers />,
    },
    {
      path: "/teachers",
      name: "Faculties",
      icon: <GiTeacher />,
    },
    {
      path: "/event",
      name: "Event & Holidays",
      icon: <MdOutlineEventNote />,
    },
    {
      path: "/admission",
      name: "Admission",
      icon: <SlGraduation />,
    },
    {
      path: "/demo",
      name: "Demo",
      icon: <SlGraduation />,
    },
  ];
  return (
    <div className="sidebar_container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            S<small>M</small>S
          </h1>
          {isOpen ? (
            <div
              style={{ marginLeft: isOpen ? "10rem" : "0rem" }}
              className="bars"
            >
              <TbArrowBarToLeft onClick={toggle} />
            </div>
          ) : (
            <div
              style={{ marginLeft: isOpen ? "10rem" : "0rem" }}
              className="bars"
            >
              <TbArrowBarToRight onClick={toggle} />
            </div>
          )}
        </div>
        {menuItem.map((item, i) => {
          return (
            <NavLink
              to={item.path}
              key={i}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>{" "}
              <div
                className="name"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
