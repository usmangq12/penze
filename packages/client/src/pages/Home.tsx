import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Blogs, Pagination, CreateBlogModal } from "../components";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Drawer } from "../shared/Drawer";
import { useSelector } from "react-redux";

export const Home = () => {
  let blogs = useSelector(({ blogs }: any) => blogs.blogs);
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [openCreateBlogModal, setOpenCreateBlogModal] = useState(false);
  const [slicedBlogs, setSlicedBlogs] = useState(blogs);
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
    <Grid container>
      <Blogs blogs={slicedBlogs} />
      <Grid container item justifyContent="center">
        <Pagination config={config} onChange={handlePaginationChange} />
      </Grid>
      <Drawer
        title="Create Blog"
        openDrawer={openCreateBlogModal}
        closeDrawer={setOpenCreateBlogModal}
        DrawerComponent={CreateBlogModal}
        selectedRow={{}}
      />
      <Grid container item>
        <Fab
          sx={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 20,
            left: "auto",
            position: "fixed",
            backgroundColor: "#29343B",
            "&:hover": {
              backgroundColor: "#29343B !important",
            },
          }}
          onClick={() => setOpenCreateBlogModal(true)}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};
