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

export function getCollection() {
  const response = axios.get(`${baseURL}/collections`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}

export function updateQuantity({ collectionId, quantity }) {
  const response = axios.patch(
    `${baseURL}/collections/${collectionId}/quantity`,
    {
      quantity: quantity,
    },

    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );

  return response;
}
