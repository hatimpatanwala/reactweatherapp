import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: linear-gradient(to bottom right,red,yellow);
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [cityid,updateCityId] = useState();
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =  await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12cfdf9f37e8a65257b2ef952fe2e702`,
    );
    
    updateWeather(response.data);
  };
  const fetchWeatherCityId = async (e) => {
    e.preventDefault();
    const response =  await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=12cfdf9f37e8a65257b2ef952fe2e702`,
    );
    
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {(city && weather) || (cityid && weather) ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={city ? fetchWeather : fetchWeatherCityId} updateCityId = {updateCityId} />
      )}
    </Container>
  );
}

export default App;
