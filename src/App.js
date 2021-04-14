import React, { useState, useEffect } from "react";
import './App.css';
import Weather from "./Weather";
import Search from "./Search"

const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
function App() {

  const [weather, setWeather] = useState([]);


  useEffect(() => {
    const initialFetching = async () => {
      await fetch(weatherApi)
        .then(response => response.json())
        .then(jsonResponse => {
          setWeather(jsonResponse);

        });
    }
    initialFetching();

  }, []);

  const search = async (city_name) => {

    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then(response => response.json())
      .then(jsonResponse => {
        setWeather(jsonResponse);
      });
  }
  return (
    <div className="App">
      <Search search={search} />

      { (typeof weather.main !== 'undefined') ? <h2><Weather weather={weather} /></h2> : <div><h2>Error Caught</h2></div>}



    </div>
  );
}

export default App;
