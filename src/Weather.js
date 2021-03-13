import React from "react";



const Weather = (props) => {
     const temp = props.weather.main.temp;
    const roundOff = Math.floor(temp);
    
  return (
    <div className="movie">
      <h2>City:{props.weather.name}</h2>
      <div>
        <h3>Temp:{roundOff}&#x2103;</h3>

      </div>
      
    </div>
  );
};


export default Weather;