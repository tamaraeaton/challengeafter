import React, { useEffect } from "react";
import FetchTVShows from "./utils/TVShowAPI";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import List from "./components/TVShowList/List";

function App() {
  useEffect(() => {
    FetchTVShows();
  });
  return (
    <div className="App">
      {/* <SearchBar /> */}
      hello world challenge-after
      {/* <List /> */}
    </div>
  );
}

export default App;
