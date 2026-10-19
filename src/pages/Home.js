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
      <button className='center'>[ View Products ]</button>
    </div>
  ) 
}

export default Home
