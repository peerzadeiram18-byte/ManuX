import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loginUser = async (email, password) => {

  const res = await axios.post(
    `${BASE_URL}/api/auth/login`,
    { email, password }
  );

  return res.data;
};