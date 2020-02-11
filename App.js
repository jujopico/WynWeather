import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CitySearch from './src/pages/CitySearch'
import SingleCity from './src/pages/SingleCity'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={CitySearch} />
      <Route path='/cities/:id' component={SingleCity} />
    </Switch>
  </BrowserRouter>
)

export default App


