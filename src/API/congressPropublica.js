import axios from 'axios';

const PROPUBLICA_KEY = process.env.REACT_APP_PROPUBLICA_CONGRESS_API
const BASE_URL = 'https://api.propublica.org/congress/v1/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {'X-API-Key': `${PROPUBLICA_KEY}`}
});

export async function getMember(id) {
  let res;
  let status;
  try {
    res = await api.get(`/members/${id}.json`);
    status = res.data.status;
    console.log(res);
    if (status === "OK") {
      return res.data.results[0];
    } else {
      throw Error("member not found")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getMemberOfficeExpenses(id, year, quarter) {
  let res;
  let status;
  try {
    res = await api.get(`members/${id}/office_expenses/${year}/${quarter}.json`);
    status = res.data.status;
    if (status === "OK") {
      return res.data.results;
    } else {
      throw Error("no records found")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getMemberPrivateTravels(id) {
  let res;
  let status;
  try {
    res = await api.get(`members/${id}/private-trips.json`);
    status = res.data.status;
    if (status === "OK") {
      return res.data.results;
    } else {
      throw Error("no records found")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getMemberBillCosponsorships(id) {
  let res;
  let status;
  try {
    res = await api.get(`members/${id}/bills/cosponsored.json`);
    status = res.data.status;
    if (status === "OK") {
      return res.data.results[0].bills;
    } else {
      throw Error("no records found")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getMemberVotePositions(id) {
  let res;
  let status;
  try {
    res = await api.get(`members/${id}/votes.json`);
    status = res.data.status;
    if (status === "OK") {
      return res.data.results[0].votes;
    } else {
      throw Error("no records found")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getRecentBills() {
  let res;
  let status;
  try {
    res = await api.get(`116/both/bills/introduced.json`);
    status = res.data.status;
    if (status === "OK") {
      return res.data.results[0].bills;
    } else {
      throw Error("no records found")
    }
  } catch (error) {
    console.error(error)
  }
}