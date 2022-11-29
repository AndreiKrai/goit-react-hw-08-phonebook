import axios from 'axios';

const BASE_URL =
  'https://637b964c10a6f23f7fad9ea0.mockapi.io/contacts/contacts/';

export const fetchData = async () => {
  const  data  = await axios.get(`${BASE_URL}`);
  console.log(data)
  return data.data;
};

export const fetchDeleteUser = async id => {
  const { data } = await axios.delete(`${BASE_URL}${id}`);
  return data;
};

export const fetchAddUser = async (contact) => {
  const { data } = await axios.post(`${BASE_URL}`,contact);
  return data;  
};
