import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'



const Countries = ({countriesPromies}) => {
    const [visitedCountry,setVisitedCountry]=useState([]);
    const [flagVisitedCountry,setFlagVisitedCountry]=useState([]);
    const handelFlag=(country)=>{
        const newVisitedFlage=[...flagVisitedCountry,country]
        setFlagVisitedCountry(newVisitedFlage);
    }
    const handleVisitedCountries=(country)=>{
              const newVisitedCountry=[...visitedCountry,country];
              setVisitedCountry(newVisitedCountry);
              
    }
    const countryData =use(countriesPromies);
    const countries=countryData.countries
     
    return (
        <div>
            <h1>Country is : {countries.length}</h1>
            {
                flagVisitedCountry.map(country=><img src={country.flags.flags.png}></img>)
            }
            <ol style={{textAlign:"start"}}>
                {visitedCountry.map(country=> <li key={country.cca3}>{country.name.common}</li>)}
            </ol>
         <div className='countries'>
               {
             countries.map(country=><Country key={country.ccn3.ccn3} country={country} 
             handleVisitedCountries={handleVisitedCountries} handelFlag={handelFlag} 
             ></Country>)
          }
         </div>
        </div>
    );
};

export default Countries;