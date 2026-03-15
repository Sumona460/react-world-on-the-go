import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({CountriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const CountriesData = use(CountriesPromise);
    const Countries = CountriesData.countries;
    console.log(Countries);

    return (
        <div>
            <h1>In The Countries: {Countries.length}</h1>
            <h3>Total Visited Countries: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            
            <div className='countries'>
                {
                Countries.map(country => <Country key={country.cca3.cca3}
                 country={country}
                 handleVisitedCountries= {handleVisitedCountries}
                 ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;