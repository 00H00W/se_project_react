import React from "react";

export const CurrentUserContext = React.createContext({
  avatar: "",
  email: "",
  name: "",
  token: "",
});
