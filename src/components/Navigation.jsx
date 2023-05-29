import React from "react"
import "./navigation.css"

function Navigation() {
  return (
    <div className="bg-dark">
      <nav>
        <ul className="d-flex flex-row">
          <li className="d-block m-2 pt-1 pb-1">
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li className="d-block m-2 pt-1 pb-1">
            <a href="#news">News</a>
          </li>
          <li className="d-block m-2 pt-1 pb-1">
            <a href="#about">About</a>
          </li>
          <li className="d-block m-2 pt-1 pb-1">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
