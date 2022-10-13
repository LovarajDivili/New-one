import DataE from './../DataE/index.json'

import './index.css'

const EmployeeDetailsCard = DataE

const EmployeeDetails = () => {

    // const {Name,Role,image_url} = EmployeeDetailsCard
    return (
        <ul className="cards-list">
        {EmployeeDetailsCard.map(eachCard => (

            <div className="card_container">
            
            <img src={eachCard.image_url} alt="" className="image" />
          
            <h1 className="heading">{eachCard.Name}</h1>
            </div>

        ))}
      </ul>
    )
}

export default EmployeeDetails

