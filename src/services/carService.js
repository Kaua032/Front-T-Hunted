import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000/api/v1";

export function searchCar(data) {
  const response = axios.get(`${baseURL}/cars/search/${data}`);

  return response;
}

export function searchCarByInfo(data){
  const response = axios.get(`${baseURL}/cars`, {
    params: data,
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response
}

export function createCar(data) {
  const response = axios.post(`${baseURL}/cars`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}
