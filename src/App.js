import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Navbar,
  VideoDetails,
  Feed,
  ChannelDetails,
  SearchFeed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetails />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
