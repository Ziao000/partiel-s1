import instance from "./api.service";

const getPosts = async () => {
  const response = await instance.get("/post");
  return response.data;
};

const postsService = {
  getPosts,
};

export default postsService;
