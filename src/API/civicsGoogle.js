import axios from 'axios';

const KEY = process.env.REACT_APP_GOOGLE_CIVICS_API
const BASE_URL = 'https://civicinfo.googleapis.com/civicinfo/v2/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': "Application/json"}
});

export async function getRepresentativesByAddress(user) {
  const address = `${user.line1} ${user.city} ${user.state} ${user.zip_code}`
  let res;
  
  try {
    res = await api.get(`/representatives?address=${address}&includeOffices=true&key=${KEY}`);
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export async function getDivisions(user) {
  const address = `${user.line1} ${user.city} ${user.state} ${user.zip_code}`
  let res;
  
  try {
    res = await api.get(`/representatives?address=${address}&includeOffices=false&key=${KEY}`);
    return res.data
  } catch (error) {
    console.error(error)
  }
}