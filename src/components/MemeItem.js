import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DvrSharpIcon from "@mui/icons-material/DvrSharp";
const style = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: "auto",
  height: 400,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function MemeItem({ name, url, box_count, width, height }) {
  return (
    <Card>
      <CardHeader avatar={<DvrSharpIcon></DvrSharpIcon>} title={name} />
      <CardMedia
        component="img"
        height="auto"
        image={url}
        width="100%"
      ></CardMedia>
      <CardContent>{/* <img src={url} width="100%" /> */}</CardContent>
    </Card>
  );
}
