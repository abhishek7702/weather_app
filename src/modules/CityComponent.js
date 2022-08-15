import React from 'react';
import styled from 'styled-components';
//import logo from '../icons/download'

const WeatherLogo= styled.img`
width:140px;
height:140px;
margin:40px auto;

`

const ChooseCityLabel= styled.span`
color:black;
font-size:18px;
font-weight:bold;
`
const SearchBox= styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
margin:20px auto ;
color:black;
font-size:18px;
font-weight:bold;
`

const CityComponent= (props)=>{
   const{updateCity,fetchWeather}=props;
    return(
        <>
         <WeatherLogo src="/icon/perfect-day.svg"/>
         <ChooseCityLabel>find weather of your city</ChooseCityLabel>
         <SearchBox onSubmit={fetchWeather}>
          <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
          <button type="submit">search</button>
         </SearchBox>
        </>
    );
}
export default CityComponent;