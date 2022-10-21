import { FunctionComponent, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import List from "../components/TVShowList/List";
import { Show } from "../modules/ShowTypes";
import sortShowsBy, { SortShowsTypes } from "../utils/sortShowFunction";

export interface HomePropTypes {
  onSearchSubmit: (searchTerm: string) => void;
  TVShows: Show[];
}

const Home: FunctionComponent<HomePropTypes> = ({
  onSearchSubmit,
  TVShows,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <SearchBar
        onSearchTermChange={setSearchTerm}
        searchTerm={searchTerm}
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit(searchTerm);
          setSearchTerm("");
        }}
      />
      {TVShows.length !== 0 ? (
        <List
          showData={sortShowsBy(SortShowsTypes.RATING, TVShows)}
          //   onClick={showItemData}
        />
      ) : (
        <div>
          We have all your favorite TV shows. What shows would you like to
          search for?
        </div>
      )}
    </div>
  );
};

export default Home;
