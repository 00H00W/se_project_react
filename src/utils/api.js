const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

function fetchCall(endpoint, method = "GET", body) {
  return fetch(baseUrl + endpoint, {
    method: method,
    headers: headers,
    body: body,
  }).then((res) => {
    if (res.ok) return res.json();
    else Promise.reject(`Error: ${res.status}`);
  });
}

export function getItems() {
  return fetchCall("/items");
}
export function postItem(body) {
  return fetchCall("/items", "POST", JSON.stringify(body));
}
export function removeItem(id) {
  return fetchCall(`/items/${id}`, "DELETE");
}
