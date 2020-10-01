import axios from 'axios';

const PROPUBLICA_KEY = process.env.REACT_APP_PROPUBLICA_CAMPAIGN_FINANCE_API;
const BASE_URL = 'https://api.propublica.org/campaign-finance/v1/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {'X-API-Key': `${PROPUBLICA_KEY}`}
});