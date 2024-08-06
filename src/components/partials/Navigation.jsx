import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({scrollToElement}) => {
  return (
    <>
      <li>
        <button onClick={() => scrollToElement("about")}>About</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("projects")}>Portfolio</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("contact")}>Contact</button>
      </li>
    </>
  )
}

export default Navigation