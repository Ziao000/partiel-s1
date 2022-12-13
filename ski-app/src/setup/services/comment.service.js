import instance from "./api.service";

const create = async (credentials) => {
  const response = await instance.post("/comments", credentials);
  return response.data;
};

const commentService = {
  create,
};

export default commentService;
