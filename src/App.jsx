
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries';


const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  

  return (
    <>
        
        
        <Suspense fallback={<p>Countries are loading...</p>}>
           <Countries CountriesPromise={CountriesPromise}></Countries>
        </Suspense>
         
       
        
      

 

     
    </>
  )
}

export default App
