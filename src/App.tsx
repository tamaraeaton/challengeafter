import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Show } from "./modules/ShowTypes";
import Home from "./pages/Home";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import FetchTVShows from "./utils/TVShowAPI";
import { localStorageKeys } from "./utils/TVShowAPI";

function App() {
  const [TVShows, setTVShows] = useState<Show[]>([]);
  const [initialSearchTerm, setInitialSearchTerm] = useState("");

  const getTVShows = async (name: string) => {
    const tvShows = await FetchTVShows(name);
    setTVShows(tvShows);
  };

  const searchSubmit = (searchTerm: string) => {
    getTVShows(searchTerm);
  };

  useEffect(() => {
    const lastResults = localStorage.getItem(localStorageKeys.lastResults);
    const lastSearchTerm = localStorage.getItem(
      localStorageKeys.lastSearchTerm
    );
    if (lastResults && lastSearchTerm) {
      setInitialSearchTerm(lastSearchTerm);
      console.log("lastSearchTerm", lastSearchTerm);
      console.log(lastResults);
      setTVShows(JSON.parse(lastResults));
    }
  }, []);

  const clearSearchResults = () => {
    setTVShows([]);
  };

  // this component (App.tsx) is being used as a global state
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            // passing props
            <Home
              onSearchSubmit={searchSubmit}
              TVShows={TVShows}
              initialSearchTerm={initialSearchTerm}
              onClear={clearSearchResults}
            />
          }
        />
        <Route
          path="/show/:id"
          element={<ShowDetailsPage TVShows={TVShows} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
