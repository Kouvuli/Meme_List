import { Button, Grid, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import MemeItem from "./MemeItem";

const MemeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meme, setMeme] = useState(null);
  const handleRandomPick = (e) => {
    e.preventDefault();
    setMeme(data[Math.floor(Math.random() * data.length)]);
  };
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((res) => {
        setData(res.data.memes);
        setMeme(res.data.memes[Math.floor(Math.random() * data.length)]);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Grid
      container
      // sx={{ "& .MuiPaper-root": { mt: "0!important" } }}
      justifyContent="center"
      // alignItems="center"
      columnSpacing={0}
    >
      <Grid item xs={9}>
        {meme && <MemeItem key={meme.id} {...meme} />}
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          sx={{
            ml: "1rem!important",

            backgroundColor: "#414141",
            "&:hover": {
              backgroundColor: "#050505",
            },
          }}
          onClick={handleRandomPick}
        >
          Random
        </Button>
      </Grid>
    </Grid>
    // <List
    //   sx={{ width: "100%", bgcolor: "background.paper" }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    // >

    // </List>
  );
};

export default MemeList;
