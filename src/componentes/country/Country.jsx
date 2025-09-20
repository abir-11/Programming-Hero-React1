import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries,handelFlag}) => {
    console.log(country.flags.flags.png);
    const [visited,setVisited]=useState(false);
    const handelClick=()=>{
        setVisited(!visited);
         handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited?'country-visited':'country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} style={{width:'100%'}} />
            <h3>Name:{country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <h4>Area:{country.area.area} {(country.area.area)>30000?'Big Country':'Small Country'} </h4>
            <button onClick={handelClick} style={{backgroundColor:'black',color:'white'}}>{visited?'Visited':"Non visited"}</button>
            <button style={{backgroundColor:'black',color:'white',marginLeft:'5px'}} onClick={()=>{handelFlag(country)}}>Add flag</button>
        </div>
    );
};

export default Country;