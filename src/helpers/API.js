import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';
// another option of BASE_URL setting
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// перехоплювач. робить щост перед запитом axios
// axios.interceptors.request.use(
//   function (config) {
//     config.headers.Authorization = localStorage.getItem('token');
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const fetchRegister = async usersData => {
  const { data } = await axios.post(`/users/signup`, usersData);
  token.set(data.token);
  return data;
};

export const fetchLogin = async usersData => {
  const { data } = await axios.post(`/users/login`, usersData);
  token.set(data.token);
  return data;
};

export const fetchData = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const fetchDeleteUser = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const fetchAddUser = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};
