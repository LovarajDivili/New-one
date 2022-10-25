
import Header from '../Header'
import Footer from './../Footer'
//import DeveloperData from './../DeveloperData'
import ProjectData from './../ProjectData'
//import ProjectDetails from '../ProjectDetails'

import './index.css'

const Projects = () => (
  <div className="projects_container">
  <Header />

  <div>
    <h1 className="project-heading">Project-Details</h1>
    <ProjectData />
    </div>

    <Footer />
    
    
  </div>
)

export default Projects