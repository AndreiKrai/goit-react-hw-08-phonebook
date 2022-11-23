import axios from 'axios';

const BASE_URL =
  'https://637b964c10a6f23f7fad9ea0.mockapi.io/contacts/contacts/';

export const fetchData = async (params) => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};

export const fetchDeleteUser = async id => {
  const { data } = await axios.delete(`${BASE_URL}${id}`);
  return data;
};

export const fetchAddUser = async (contact,thunkApi) => {try{
  const { data } = await axios.post(`${BASE_URL}`,contact);
  return data;}
  catch(e){return thunkApi.rejectWithValue(e.message)}
};
