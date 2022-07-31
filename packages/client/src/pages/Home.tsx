import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Blogs, Pagination, CreateBlogModal } from "../components";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Drawer } from "../shared/Drawer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage } from "../components/ErrorMessage";
import * as React from "react";

import { fetchBlogs } from "../store/BlogsSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { IBlog } from "../types";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { blogs, loading } = useAppSelector((state) => state.blogs);
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [openCreateBlogModal, setOpenCreateBlogModal] = useState(false);
  const [slicedBlogs, setSlicedBlogs] = useState<IBlog[]>([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const config = { noOfPages, page };

  useEffect(() => {
    dispatch(fetchBlogs() as any);
  }, [dispatch]);

  const sliceBlogs = () => {
    return blogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  };

  useEffect(() => {
    const paginatedBlogs = blogs && blogs.length && sliceBlogs();
    setSlicedBlogs(paginatedBlogs || []);
    setNoOfPages(Math.ceil(blogs.length / itemsPerPage));
  }, [page, blogs]);

  const handlePaginationChange = (event: any, value: any) => {
    setPage(value);
  };
  useEffect(() => {
    const paginatedBlogs = sliceBlogs();
    setSlicedBlogs(paginatedBlogs);
  }, [page]);
  if (loading === "pending")
    return (
      <Grid
        container
        alignItems={"center"}
        height={"100vh"}
        justifyContent={"center"}
      >
        <CircularProgress />
      </Grid>
    );

  if (loading === "idle")
    return (
      <Grid container>
        {slicedBlogs.length && <Blogs blogs={slicedBlogs} />}
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
              width: "45px",
              height: "45px",
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
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer - 1 }}
            open={openCreateBlogModal}
            onClick={() => setOpenCreateBlogModal(false)}
          ></Backdrop>
        </Grid>
      </Grid>
    );
  if (loading === "failed") return <ErrorMessage />;
  return null;
};
