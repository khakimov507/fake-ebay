import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import c from "./Auth.module.scss"

const Auth = () => {
  return (
    <div className={c.auth}>
      <div className={c.auth__form}>
        <ul className={c.auth__nav}>
          <li>
            <NavLink className={(navData) => (navData.isActive ? c.auth__link__active : null)} to="/auth/login">Login</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? c.auth__link__active : null)} to="/auth/register">Register</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Auth