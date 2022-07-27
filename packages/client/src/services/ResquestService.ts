import axios from "../axios-instance";

export const getAllBlogs = () => {
  return axios.get("/blogs");
};

export const getBlogById = (id: string) => {
  return axios.get("/blog/" + id);
};

export const crateBlog = (data: any) => {
  return axios.post("/blog", data);
};
