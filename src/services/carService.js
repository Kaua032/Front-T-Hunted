import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000/api/v1";

export function searchCar(data){
    const response = axios.get(`${baseURL}/cars/search/${data}`);

    return response;
}
