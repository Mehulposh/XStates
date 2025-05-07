import axios from 'axios';

const EndPoint = "https://crio-location-selector.onrender.com";


export async function getCountries() {
    try {
        const response = await axios.get(`${EndPoint}/countries`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching countries:", error);
        return [];
    }   
}


export async function getStates(countryName) {
    try{
        const response = await axios.get(`${EndPoint}/country=${countryName}/states`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching states:", error);
        return [];
    }
}


export async function getCities(countryName, stateName) {
    try{
        const response = await axios.get(`${EndPoint}/country=${countryName}/state=${stateName}/cities`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching cities:", error);
        return [];
    }
}