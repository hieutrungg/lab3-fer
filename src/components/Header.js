import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="col">
      <h1 className='col-4'>[ Product Store ]</h1>
      <nav className='col-4'>
        <Link to="/"><b>[ Home ]</b></Link>
        <Link to="/products"><b>[ Products ]</b></Link> 
      </nav>
      
    </div>
    </div>
  )
}

export default Header
