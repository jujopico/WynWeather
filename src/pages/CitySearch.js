import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CitySearch extends Component {
    state = { cities: [] };

    handleCitySearch = event => {
      fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${event.target.value}`)
        .then(response => response.json())
        .then(data => this.setState({ cities: data }))
    }
    
    render(){
    return(
      <div>
        <h3>City Search</h3>
        <input
          type="text"
          autoComplete="off"
          onChange={this.handleCitySearch} 
        />
        {
          this.state.cities.map(city => (
            <Link key={city.id} to={`/cities/${city.id}`}>
              <div className="citySearch">
                <h3>{city.name}</h3>
              </div>
            </Link>
          ))
        }
      </div>

    )
  }
}

export default CitySearch
