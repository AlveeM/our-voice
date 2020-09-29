import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"}
});

export async function getResources() {
  let res;

  try {
    res = await api.get(`/resources`);
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export async function getTags() {
  let res;

  try {
    res = await api.get(`/tags`);
    return res.data
  } catch (error) {
    console.error(error)
  }
}