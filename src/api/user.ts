import { kyApi } from "./api";

const getUser = (id: string) => kyApi.get(`users/${id}`).json();

export { getUser };
