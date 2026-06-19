import axios from "axios";

const baseURL = "http://localhost:3000/api/v1";

export function signin(data) {
    const response = axios.post(`${baseURL}/auth/login`, data);

    return response;
}

export function signup(data) {
    const response = axios.post(`${baseURL}/users`, data);

    return response;
}
