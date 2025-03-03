import { fetchCall } from "./api";

export function signup(body) {
  return fetchCall("/items", "POST", JSON.stringify(body));
}
export function signin(body) {
  return fetchCall("/items", "POST", JSON.stringify(body));
}
