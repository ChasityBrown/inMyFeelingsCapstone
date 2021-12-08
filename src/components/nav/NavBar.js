import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/quotes">Need Some Motivation?</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/sillycontent">Let's Get Silly!</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/diary">My Safe Place</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/songs">Everyone's Fave Songs</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("feelings_user")
                    }
                }>Logout</Link>
            </li>
        </ul>
    )
}