import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://copychic.ru',  // Replace with your API base URL
  timeout: 40000 ,                      // Set a timeout for requests
});

export default axiosInstance;