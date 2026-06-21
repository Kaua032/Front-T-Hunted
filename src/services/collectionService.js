import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000/api/v1";

export function createCollection(data) {
  const response = axios.post(`${baseURL}/collections`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

  return response;
}