import axios from "axios";

export const getElementsRequest = async () =>
  await axios.get("http://localhost:4000/elements");

export const createElementRequest = async (element) =>
  await axios.post("http://localhost:4000/elements", element);

export const deleteElementRequest = async (id) =>
  await axios.delete(`http://localhost:4000/elements/${id}`);

export const getElementRequest = async (id) =>
  await axios.get(`http://localhost:4000/elements/${id}`);

export const updateElementRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/elements/${id}`, newFields);
