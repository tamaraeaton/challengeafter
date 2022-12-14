import { FunctionComponent, useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import List from "../components/TVShowList/List";
import { Show } from "../modules/ShowTypes";
import sortShowsBy, { SortShowsTypes } from "../utils/sortShowFunction";
import { useQuery } from "../hooks/useQuery";
// import { localStorageKeys } from "../utils/TVShowAPI";

export interface HomePropTypes {
  // functions are props going up to parent
  // parent (APP) defines the function for this child (HOME)
  onSearchSubmit: (searchTerm: string) => void;
  // these are props going down to the children (LIST, SEARCHBAR) whatever is imported
  TVShows: Show[];
  initialSearchTerm?: string;
  onClear: () => void;
}

const Home: FunctionComponent<HomePropTypes> = ({
  // giving props
  onSearchSubmit,
  TVShows,
  initialSearchTerm,
  onClear,
}) => {
  const query = useQuery();
  const queryParamSearch = query.get("q");

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");
  console.log("here", searchTerm);
  // using enum with the state, highlight sortShowsBy to see the enum being used
  // default sort is by Score
  const [sortShowsLocalState, setSortShowsLocalState] = useState(
    SortShowsTypes.SCORE
  );

  const [isReversed, setIsReversed] = useState(false);

  const handleSubmit = () => {
    onSearchSubmit(searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    if (queryParamSearch) {
      // setSearchTerm(queryParamSearch);
      // handleSubmit();
      onSearchSubmit(queryParamSearch);
    }
  }, [queryParamSearch]);

  useEffect(() => {
    if (initialSearchTerm) {
      setSearchTerm(initialSearchTerm);
    }
  }, [initialSearchTerm]);

  // if original list changes or the sortShowsByState changes, it will recalculate due to the depencies
  // useMemo will cache the returned array only if the depencies change (need better understanding here)
  // setSortShowsByState isn't needed here, because it is default
  const sortedShowsDefault = useMemo(() => {
    return sortShowsBy(sortShowsLocalState, TVShows, isReversed);
  }, [sortShowsLocalState, TVShows, isReversed]);

  const updateSort = (sortType: SortShowsTypes) => {
    // setSortShowsByState is needed here because the sort button needs to hold the name of the column when clicked
    // setting the state to the sort type (score, name, rating)
    if (sortType === sortShowsLocalState) {
      setIsReversed(!isReversed);
    } else {
      setSortShowsLocalState(sortType);
      setIsReversed(!isReversed);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    onClear();
  };

  console.log("render");
  return (
    <div className="App">
      <SearchBar
        onSearchTermChange={setSearchTerm}
        searchTerm={searchTerm}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
      {TVShows.length !== 0 ? (
        <List
          // this is in a useMemo to cache the list and only run when the state or TV shows change
          showData={sortedShowsDefault}
          // user has ability to select a sort on the name and rating header of the List
          // showData={sortShowsBy(sortShowsByState, TVShows)}
          onUpdateSort={updateSort}
          isReversed={isReversed}
          onClear={clearSearch}
        />
      ) : (
        <div>
          <h1>
            We have all your favorite TV shows. What shows would you like to
            search for?
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
