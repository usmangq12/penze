import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Blogs, Pagination } from "../components";

const blogs = [
  {
    title: "Blog Title 1",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 2",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 3",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 4",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 5",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 6",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 7",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 8",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 9",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 10",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 11",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 12",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 13",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 14",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },

  {
    title: "Blog Title 15",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

export const Home = () => {
  const [page, setPage] = useState(1);
  const [slicedBlogs, setSlicedBlogs] = useState(blogs);
  const itemsPerPage = 5;
  const [noOfPages] = useState(Math.ceil(blogs.length / itemsPerPage));
  const config = { noOfPages, page };

  const sliceBlogs = () => {
    return blogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  };

  const handlePaginationChange = (event: any, value: any) => {
    setPage(value);
  };

  useEffect(() => {
    const paginatedBlogs = sliceBlogs();
    setSlicedBlogs(paginatedBlogs);
  }, [page]);

  return (
    <Grid item>
      <Blogs blogs={slicedBlogs} />
      <Pagination config={config} onChange={handlePaginationChange} />
    </Grid>
  );
};
