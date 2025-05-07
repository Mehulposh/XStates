import { useEffect, useState } from 'react'
import { getCountries, getStates , getCities } from './api/api'
import Select from './components/Select/Select'
import './App.css'


function App() {
 
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }
  , []);



  const handleCountryChange = async (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);
    if(!countryName) {
      return;
    }

      try {
        const data = await getStates(countryName);
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
   

  };

  const handleStateChange = async (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    setSelectedCity("");
    setCities([]);
    if(!stateName) {
      return;
    }
    
      try {
        const data = await getCities(selectedCountry, stateName);
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
   
  };


  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    if(!cityName) {
      return;
    }
    console.log(`Selected City: ${cityName}`);
    // You can perform any action with the selected city here
  }

  return (
    <div className='app'> 
      <h1>Select Location</h1>
      <div style={{ display: "flex", gap: "10px" }}>
      <Select data={countries} handler={handleCountryChange} name="Country"  />
      <Select data={states} handler={handleStateChange} name="State" disabled={!selectedCountry}/>
      <Select data={cities} handler={handleCityChange} name="City" disabled={!selectedState}/>
      </div>
      {selectedCity && (
        <h3>You selected <span id='city'>{selectedCity}</span>, <span id='state'>{selectedState}</span>, <span id='country'>{selectedCountry}</span> </h3>
      )}
    </div>
  );

  
}

export default App
