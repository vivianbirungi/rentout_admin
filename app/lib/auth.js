import axios from "axios";
const base_url = "";

export function login(user) {
    return axios.post(
      `${base_url}/userLogIn`,
      JSON.stringify(user),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }


