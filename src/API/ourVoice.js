import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"}
});

const apiAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.token
  }
})

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

export async function getElections() {
  let res;
  try {
    res = await api.get('/elections');
    return res.data
  } catch(error) {
    console.log(error)
  }
}

export async function followElection(id) {
  apiAuth.post(`/follow_election/${id}`)
}

export async function unfollowElection(id) {
  apiAuth.post(`/unfollow_election/${id}`)
}