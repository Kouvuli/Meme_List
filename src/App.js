import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MemeList from "./components/MemeList";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          p: "80px 100px",
          backgroundColor: "#EFE5E2",
          borderRadius: "10px",
          boxShadow:
            " 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
        }}
      >
        <MemeList />
      </Box>
    </Container>
  );
}
