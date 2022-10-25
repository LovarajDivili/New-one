import Header from '../Header'
import DeveloperData from './../DeveloperData'
import Footer from './../Footer'
import { Link } from 'react-router-dom'
//import { useState } from 'react'
//import EmployeeCard from './../EmployeeCard'
import './index.css'

const Resources = () => {

  




  return (
    <>
    <Header />


    <div className="developer_container">
    <h1 className="headingsss">Developer-Details</h1>

    
    
    <Link to='/' className="">
    <button className='back_button'>Back</button>
    
    </Link>
    
    
    <DeveloperData />
    
    </div>

    <Footer />


  </>

  )
}
 

export default Resources