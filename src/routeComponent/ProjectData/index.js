

import './index.css'
import { useState } from 'react';
//import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import CardItem from './../CardItem'
import OldJson from './../OldJson/jsonData.json'





const ProjectData = () => {

    const developer_details=OldJson.map(eachItems=>{
    return eachItems.Projects
    })

    //console.log(developer_details)

const newArray=[]
const projectname = developer_details.map(eachItem=>{


   let x= eachItem.map((name)=>{
       const y= newArray.push(name.Name)
        return y
    })
    return x
})


const uniq_project_names = [...new Set(newArray)];


const [search, setSearch] = useState('');
   // console.log(search)
//console.log(uniq_project_names)

    return(

        <>
        

        <div className="cards-lists">
        <div className="search_container">
        <input type="search" placeholder="Search...!" className="search" 
        value={search}
        onChange={(event) => setSearch(event.target.value)} />
      
        <h3>Search</h3>
        </div>

        {uniq_project_names.map(eachName => {
            return (


                <CardItem  key={uuidv4()} details={eachName}  />
                   
                            
            )
        })}
        
      </div>
      
  
        </>

    


    )
}

export default ProjectData


