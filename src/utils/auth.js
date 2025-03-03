import { fetchCall } from "./api";

export function signup(body) {
  return fetchCall("/signup", "token", "POST", JSON.stringify(body));
}
export function signin(body) {
  return fetchCall("/signin", "token", "POST", JSON.stringify(body));
}
export function checkToken(token) {
  return fetchCall("/users/me", token);
}
