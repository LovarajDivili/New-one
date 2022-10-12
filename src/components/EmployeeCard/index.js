import './index.css'

const EmployeeCard = props => {
    console.log(props)
    const {cardDetails} = props
    const {Name,Role,image_url,} = cardDetails


    return (
        <li className='card-item'>
    
        <img src={image_url} alt="images" className="image"/>
        <div className="disc">
        <h1 className="heading">{Name}</h1>
        <h1 className="discription">{Role}</h1>
        </div>
        </li>

    )
}

export default EmployeeCard