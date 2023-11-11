import axios from "axios";

export const getServicesRequest = async () =>
  await axios.get("http://localhost:4000/services");

export const createServiceRequest = async (service) =>
  await axios.post("http://localhost:4000/services", service);

export const deleteServiceRequest = async (id) =>
  await axios.delete(`http://localhost:4000/services/${id}`);

export const getServiceRequest = async (id) =>
  await axios.get(`http://localhost:4000/services/${id}`);

export const updateServiceRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/services/${id}`, newFields);