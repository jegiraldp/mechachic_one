import axios from "axios";

//////////CUSTOMERS
export const getCustomersRequest = async () =>
  await axios.get("http://localhost:4000/customers");

export const getCustomerRequest = async (id) =>
  await axios.get(`http://localhost:4000/customers/${id}`);

export const createCustomerRequest = async (provider) =>
  await axios.post("http://localhost:4000/customers", provider);

export const updateCustomerRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/customers/${id}`, newFields);

export const deleteCustomerRequest = async (id) =>
  await axios.delete(`http://localhost:4000/customers/${id}`);

//////////PROVIDERS
export const getProvidersRequest = async () =>
  await axios.get("http://localhost:4000/providers");

export const getProviderRequest = async (id) =>
  await axios.get(`http://localhost:4000/providers/${id}`);

export const createProviderRequest = async (provider) =>
  await axios.post("http://localhost:4000/providers", provider);

export const updateProviderRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/providers/${id}`, newFields);

export const deleteProviderRequest = async (id) =>
  await axios.delete(`http://localhost:4000/providers/${id}`);

///////////////

export const createPersonRequest = async (person) =>
  await axios.post("http://localhost:4000/persons", person);

export const deletePersonRequest = async (id) =>
  await axios.delete(`http://localhost:4000/persons/${id}`);

export const getPersonRequest = async (id) =>
  await axios.get(`http://localhost:4000/persons/${id}`);

export const updatePersonRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/persons/${id}`, newFields);
