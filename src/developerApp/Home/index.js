import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import Data from './developerApp/Data'
import './index.css'

class Home extends Component {
  state = {
    developer_list: [Data], 
    isLoading: true
  }

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()

    console.log(teamsData.teams)

    const updatedTeamsData = teamsData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedTeamsData)
    this.setState({iplTeamsList: updatedTeamsData, isLoading: false})
  }

  render() {
    const {developer_list, isLoading} = this.state
    return (
      <div className="home-container">

        <div className="header_container">
 
        <img src="https://secureservercdn.net/160.153.137.91/nhd.f13.myftpupload.com/wp-content/uploads/2022/06/logo-1-14.svg?time=1665549221" 
         alt="aifa"
         className="aifa_logo" />

         <h1 className="ipl-dashboard">XXXX</h1>
        </div>
        <hr/>


        <h1 className="heading">Employee-Details</h1>



        <ul className="teams-list">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" height={50} />
            </div>
          ) : (
            developer_list.map(iplTeam => (
              <TeamCard iplTeam={iplTeam} key={iplTeam.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
