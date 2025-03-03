const baseUrl = "http://localhost:3001";
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
