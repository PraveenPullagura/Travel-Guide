import './App.css'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import TravelItem from './components/TravelItem'

class App extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    //  console.log(data)
    const updatedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      description: eachItem.description,
    }))
    //    console.log(updatedData)
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        <div className="card-container2">
          {isLoading ? (
            <div data-testid="loader" className="card-container2">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-container2">
              {blogsData.map(eachData => (
                <TravelItem travelItemDetails={eachData} key={eachData.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
