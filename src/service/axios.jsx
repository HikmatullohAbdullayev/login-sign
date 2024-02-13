import axios from "axios";

export const axiosPost = axios.create({
    baseURL: 'https://reqres.in/api/',
  });