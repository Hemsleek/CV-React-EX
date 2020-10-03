import React , {useState , useEffect} from 'react';
import axios from 'axios'

import './App.scss';

const key = process.env.REACT_APP_API_KEY

const OneCountryFiltered = ({country}) =>{

  const [weather, setWeather] = useState(null)

  useEffect(() => {
   
    axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${country.capital}`).then(response => response.data).then(currentWeather => setWeather(currentWeather.current)).catch(error => error) 
   
  }, [country])
  
 
   return( <div className="one-country-result">
     
      <h2>{country.name}</h2>

      <p>
        <strong>Capital</strong> - {country.capital}
      </p>

      <p>
        <strong>Population</strong> - {country.population}
      </p>

      <h2>Languages</h2>
      <ul>
        {
          country.languages.map(language => (<li key={language.name}>{language.name}</li>))
        }
      </ul>

      <img src={country.flag} alt={`${country.name}-flag`}/>
      {weather && 
      <div className="weather-display">
        <h2>{country.capital}</h2>
        <p>
          <strong>Temperature</strong> : {`${weather.temperature} Celcius`}
        </p>
        <img src={weather.weather_icons[0]} alt="weather-icon"/>
        <p>
          <strong>Wind</strong> : {`${weather.wind_speed} mph direction ${weather.wind_dir}`}
        </p>
      </div>
      }

    </div> 
  )
      }
  

 

const App = () => {

  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState('')
  const [display, setDisplay] = useState(null)


  useEffect(() => {
    
    axios.get('https://restcountries.eu/rest/v2/all')
         .then(response => setCountries(response.data))
         .catch(error => alert(`fetching failed, ${error}`))
  }, [])

  const countriesToShow = filtered.trim()?
                            countries.filter(country => country.name.toLowerCase().indexOf(filtered.toLowerCase().trim()) > -1) : []
                            

  return (
    <div className="App">
      <div className="country-to-show">
      <input
        type="search" placeholder="Find Countries"
        value={filtered} onChange={e => setFiltered(e.target.value)}
      />
      <div className="screen">
        
          {
            (countriesToShow.length===1) && 
            <OneCountryFiltered country={countriesToShow[0]}/> 
          }

          {
            (countriesToShow.length>1 && countriesToShow.length<=10) &&  
            countriesToShow.map(country => 
              (<div className="country" key={country.name}>
                
                <span>{country.name}</span>
                <button onClick ={e => setDisplay(country)}>OPEN</button>

              </div>)
            )
          }

          { 
            countriesToShow.length > 10  &&  <center>Too many matches, specify an addition filter...</center> 
          }
        
      </div>
      </div>

        <div className="display">
        
          {display && <OneCountryFiltered country={display} /> }
        
        </div>
    </div>
  );
}

export default App;
