import EmployeeCard from '../EmployeeCard'
import { useState } from 'react'
//import DataE from './../DataE/index.json'
import OldJson from './../OldJson/jsonData.json'

import './index.css'





  
  const DeveloperData = () => {

    const [search, setSearch] = useState('');
    console.log(search)

  // const onChangeEvent = (event) => {
  //   setSearch(event.target.value)
  // }




    return (
        <div className="container">
        <div className="search_container">
    <input type="search" placeholder="Search...!" className="search" 
    value={search}
    onChange={(event) => setSearch(event.target.value)} />
  
    <h3>Search</h3>
    </div>
      
        <ul className="cards-list">
        {OldJson.filter(each => each.Name.toLowerCase().includes(search.toLowerCase())).map(eachCard => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
        </div>
    )
  }

  export default DeveloperData

