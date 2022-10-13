

import './index.css'




const EmployeeCard = (props) => {
        const {cardDetails} = props
        const {Name,Role,image_url} = cardDetails

        return(
        <div>
        <li className="card-item" >
        <img src={image_url} alt="images" className="image"/>
        <div className="disc">
        <h1 className="heading">{Name}</h1>
        <h1 className="discription">{Role}</h1>
        </div>
        </li>
        </div>

        )
    }


export default EmployeeCard