//import ProjectData from "../ProjectData"
import { useParams } from "react-router-dom"
import OldJson from './../OldJson/jsonData.json'
import "./index.css"
import ProjectData from "../ProjectData"
import Footer from "../Footer"



const ProjectDetails = ({match}) => {

    const {projectname} = useParams()
 
    //const projectDetailsArray = projectdetails.split(",")

    //console.log( projectname)
     const myArray = []
  
     const fetchData = () => {
      
      const dataObj =  OldJson.map(each => each.Projects.map(e => e.Name === projectname && ( myArray.push(each.Name) && (myArray.push(each.Role )))))
        return myArray
  }
  
  
  
    const projDetails = fetchData() 
    //console.log(details)
    //console.log(projDetails)
  
    const Name = []
    const Role = []
    const  details = {}
    //console.log(Name);
    //console.log(Role);

    for (var i = 0; i < projDetails.length; i++) {
        if(i % 2 === 0) { // index is even
            Name.push(projDetails[i]);
            details.Name = Name;
        }
        else{
            Role.push(projDetails[i]);
            details.Role = Role;
        }
    }
    //  console.log(Name)
    // console.log(Role)

     console.log(details)
     var data = [];

     Role.forEach((Role,i) =>

   

        data= [...data, {"Name": Name[i], "Role":Role}]

     )

   

     console.log(data)


    
    
    

    

    

    return(

        <>

        <div className="project-details-card mt-5 ">

        <center>

        <div className="card">



        <h1> Project Name : <span className="heading-text">{projectname}</span></h1> <br/>

     {

        data.map((e) => {

            return(

                <>

               

                <p ><span >{e.Name}</span> - <span className="text-color">{e.Role}</span></p>

                </>

            )

        })

     }

        </div>

        </center>

        </div>

       

      </>


    )
}

export default ProjectDetails