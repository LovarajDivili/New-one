import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className='hometext'>Helping Worldwide Businesses In Their Digital Transformations</h1>
       
      </div>
      <img
        src="https://res.cloudinary.com/dcci6hybb/image/upload/v1664186100/aifa-logo_twt3fo.jpg_1_apfoxb.jpg"
        alt="aifa labs"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home


