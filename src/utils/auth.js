import { fetchCall } from "./api";

export function signup(body) {
  return fetchCall("/signup", "POST", JSON.stringify(body));
}
export function signin(body) {
  return fetchCall("/signin", "POST", JSON.stringify(body));
}
