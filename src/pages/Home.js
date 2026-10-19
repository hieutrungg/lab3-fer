import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Button } from 'bootstrap'

function Home() {
  return (
    <div>   
      <Header></Header>
      <h1 className='text-center'><b>Welcome to ProductStore</b></h1>
      <h2 className='text-center'>Manage and explore products for your needs</h2>
      <Link to="/products" role="button" style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}>
        [ View Products ]
      </Link>
    </div>
  ) 
}

export default Home
