## Wyn-Weather APP

It should look like this: http://wyn-weather-app.herokuapp.com

This app was boostrapped with Create React App.   We added react-router-dom, and configured a BrowserRouter in App.js that has two Routes: CitySearch and SingleCity.

The rest is up to you, but you will want to use the API we built for you.

Try `https://wyn-weather-api.herokuapp.com/cities?query=lo`

Or `https://wyn-weather-api.herokuapp.com/cities/44418`

## Getting Started

* Clone this repo and `cd` into it
* `yarn install && yarn start`

## Possible Problems

* Cannot resolve module 'react-dom'/'react-router-dom'
  Check package.json if `react-dom` and `react-router-dom` are missing in the independencies, do `yarn add react react-dom --save` and `yarn add react react-router-dom` or `npm install` in terminal.
