import { Blogs } from "../components";

const blogs = [
  {
    title: "Blog Title 1",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 1",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 1",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Blog Title 1",
    date: "02-02-2022",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

export const Home = () => {
  return <Blogs blogs={blogs} />;
};
