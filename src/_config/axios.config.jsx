import axios from 'axios';
import {toastr} from 'react-redux-toastr';

 const   axiosConfig = () => {
  const defaultOptions = {
    baseURL: 'https://localhost:5001/',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

  instance.interceptors.response.use(function (response) {
    if(response.status === 200 && response.data.message  && response.data){
        toastr.success(response.data.message);
    }
    return response;
    }, function (error) {
      var errorResponse = error.response;
      if(errorResponse.status === 401){
        toastr.error(errorResponse.data.message);
      }

      if(errorResponse.status === 400){
        toastr.error(errorResponse.data.message);
      }
      return Promise.reject(error);
  })

  return instance;
};

export default axiosConfig();
