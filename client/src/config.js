import axios from "axios";
const configs = {
    development: 'http://localhost:8080',
    production:  'https://dulin-dis.herokuapp.com'
  };
  
export const axiosInstance = axios.create({
  baseURL:configs[process.env.NODE_ENV]
})