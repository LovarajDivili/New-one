import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-content nav-bar-large-container">
        <div className="button-div">
          <Link to="/login">
            <button type="button" className="logout-desktop-btn">
              Login
            </button>
          </Link>
          <Link to="/sinup">
            <button type="button" className="logout-desktop-btn">
              Registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)
export default Header