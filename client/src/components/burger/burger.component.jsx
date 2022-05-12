import React from 'react'

const Burger = ({handleToggle}) => (
    <div className="burger" onClick={handleToggle}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
)

export default Burger