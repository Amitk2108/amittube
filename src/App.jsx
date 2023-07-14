import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import VideoPlayerPage from "./components/VideoPlayerPage";
import { YoutubeApi } from "./context/YoutubeApi";

const App = () => {
    return (
      <YoutubeApi>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult />}
              />
              <Route path="/video/:id" element={<VideoPlayerPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </YoutubeApi>
    );
};

export default App;
