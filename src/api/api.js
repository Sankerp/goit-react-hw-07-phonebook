import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://64c3b6af67cfdca3b6602877.mockapi.io/',
});

export const fetchContacts = async () => {
  const { data } = await $instance.get('/contacts');
  return data;
};
export const addContacts = async contact => {
  const { data } = await $instance.post('/contacts', contact);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await $instance.delete(`/contacts/${id}`);
  return data;
};
