import React, { Component } from 'react'

class SingleCity extends Component {
  state = { 
    city: '',
    forecasts: []
  }

 handleSingleCity = () => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ city: data.name, forecasts: data.forecasts }))
  }

  componentDidMount(){
    this.handleSingleCity()}

  render(){
    return(
      <>
      <h3>{this.state.city.name}</h3>
      <div>
       { this.state.forecasts.map(day => (
         <>
         <h4>{day.date}</h4>
         <h5>{day.weather}</h5>
         <img src={day.image} alt={day.weather} />
         <h5>Low: {day.min_temp}</h5>
         <h5>High: {day.max_temp}</h5>
         <h5>Humidity: {day.humidity}</h5>
         </>
       ))}
      </div>
      </>
    )
  }
}

export default SingleCity
