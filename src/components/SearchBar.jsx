import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }

    setSearchTerm("");
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        pl: 2,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton sx={{ p: "10PX", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Sidebar;
