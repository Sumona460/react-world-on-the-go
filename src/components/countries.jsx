import React, { use } from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({CountriesPromise}) => {

    const CountriesData = use(CountriesPromise);
    const Countries = CountriesData.countries;
    console.log(Countries);

    return (
        <div>
            <h1>In The Countries: {Countries.length}</h1>
            
            <div className='countries'>
                {
                Countries.map(country => <Country key={country.cca3.cca3}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;