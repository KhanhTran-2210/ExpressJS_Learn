import axios from "axios";

export const BASE_URL = "http://localhost:8081";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
export const getListVideo = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`, options);
  return data;
};

export const loginFacebookApi = async (payload) => {
  const { data } = await axios.post(`${BASE_URL}/auth/login-facebook`, payload);
  return data;
};
