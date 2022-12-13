import instance from "./api.service";

const getPosts = async () => {
  const response = await instance.get("/post");
  return response.data;
};

const getOne = async (credentials) => {
  const response = await instance.get(`/post/${credentials}`);
  return response.data;
};

const postsService = {
  getPosts,
  getOne,
};

export default postsService;
