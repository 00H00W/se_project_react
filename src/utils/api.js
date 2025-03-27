import { json } from "react-router-dom";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtw.jumpingcrab.com"
    : "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

export function fetchCall(endpoint, token, method = "GET", body) {
  return fetch(baseUrl + endpoint, {
    method: method,
    headers: { ...headers, authorization: `Bearer ${token}` },
    body: body,
  }).then((res) => {
    if (res.ok) return res.json();
    else Promise.reject(`Error: ${res.status}`);
  });
}

export function getItems() {
  return fetchCall("/items");
}
export function postItem(body, token) {
  return fetchCall("/items", token, "POST", JSON.stringify(body));
}
export function removeItem(id, token) {
  return fetchCall(`/items/${id}`, token, "DELETE");
}

export function addCardLike(id, token) {
  return fetchCall(`/items/${id}/likes`, token, "PUT");
}
export function removeCardLike(id, token) {
  return fetchCall(`/items/${id}/likes`, token, "DELETE");
}
export function updateUser(body, token) {
  return fetchCall("/users/me", token, "PATCH", JSON.stringify(body));
}
