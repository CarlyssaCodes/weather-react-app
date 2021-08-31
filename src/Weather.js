import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="row weather">
      <div className="col-md-8">
        <p>
          {" "}
          20
          <a href="#" className="celsius">
            ℃
          </a>{" "}
          |
          <a href="#" className="farenheit">
            ℉
          </a>
        </p>
        <p>Overcast Clouds</p>
        <p>Feels like 75°F</p>
        <p>Wind Speed: 20km/h</p>
        <p>Humidity: 80%</p>
      </div>
      <div class="col-md-4">
        <p>
          <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
        </p>
      </div>
    </div>
  );
}
