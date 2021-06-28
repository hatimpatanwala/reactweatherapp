import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
  
  

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    margin-bottom:2px
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
    margin-top:4px
  }
  & p {
    text-align:center;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px 20px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather ,updateCityId } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"/reactweatherapp/icons/movingcloud.gif"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <p>Or</p>
        <input placeholder="City ID"
        onChange={(e) => updateCityId(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
