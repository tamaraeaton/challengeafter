import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Show } from "./modules/ShowTypes";
import Home from "./pages/Home";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import sortShowsBy, { SortShowsTypes } from "./utils/sortShowFunction";
import FetchTVShows from "./utils/TVShowAPI";

function App() {
  const [TVShows, setTVShows] = useState<Show[]>([]);
  const [TVShowItem, setTVShowItem] = useState<Show[]>([]);

  const getTVShows = async (name: string) => {
    const tvShows = await FetchTVShows(name);
    setTVShows(tvShows);
  };

  const searchSubmit = (searchTerm: string) => {
    getTVShows(searchTerm);
  };

  // const showItemData = () => {
  // get the id of the item clicked
  // pass the props of the item data to be view on the item
  //
  // };

  useEffect(() => {
    console.log(sortShowsBy(SortShowsTypes.SCORE, TVShows));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TVShows]);

  // do I need a screens component so the Home can have all the divs instead of the App?  Is this why the Route isn't working?

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={<Home onSearchSubmit={searchSubmit} TVShows={TVShows} />}
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
