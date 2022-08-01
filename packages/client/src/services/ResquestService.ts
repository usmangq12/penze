import axios from "../axios-instance";

export const getAllBlogs = () => {
  return axios.get("/blogs");
};

export const getBlogById = (id: string) => {
  console.log({ id });
  return axios.get("/blog/" + id);
};

export const createBlog = (data: any) => {
  return axios.post("/blog", data);
};
