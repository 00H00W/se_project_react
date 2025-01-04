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

export function get() {
  return fetchCall("/items");
}
export function post(body) {
  return fetchCall("/items", "POST", JSON.stringify(body));
}
export function remove(id) {
  return fetchCall(`/items/${id}`, "DELETE");
}
