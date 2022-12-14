import instance from "./api.service";

const create = async (credentials) => {
  const response = await instance.post("/booking", credentials);
  return response.data;
};

const bookingService = {
  create,
};

export default bookingService;
