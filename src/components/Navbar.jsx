import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/contants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: "#000",
        position: "sticky",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ display: "flex", alignItems: "center" }}
          height={45}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
