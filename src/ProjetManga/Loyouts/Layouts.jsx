import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../pages/NavBar.jsx';

export default function Layouts() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer>Footer</footer>
    </>
  )
}
