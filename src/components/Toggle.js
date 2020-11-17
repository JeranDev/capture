import React, { useState } from 'react'

const Toggle = ({ children }) => {
  console.log(children)
  const [toggle, setToggle] = useState(true)
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ''}</div>
}

export default Toggle
