import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({scrollToElement}) => {
  return (
    <>
      <li>
        <button onClick={() => scrollToElement("about")}>About</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("projects")}>Projects</button>
      </li>
      <li>
        <button>Contact</button>
      </li>
    </>
  )
}

export default Navigation