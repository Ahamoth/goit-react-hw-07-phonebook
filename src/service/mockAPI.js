import axios from 'axios';

axios.defaults.baseURL = 'https://643670443e4d2b4a12d24029.mockapi.io';

export const addContactApi = contact => {
  return axios.post('/contacts/contacts', contact).then(({ data }) => {
    return data;
  });
};

export const getContactsApi = () => {
  return axios.get('/contacts/contacts').then(({ data }) => {
    return data;
  });
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/contacts/${id}`).then(({ data }) => {
    return data;
  });
};