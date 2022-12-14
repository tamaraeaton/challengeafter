import { Show } from "../modules/ShowTypes";

export type ApiFetchFunction<ResponseType, RequestArgument = void> = (
  arg: RequestArgument
) => Promise<ResponseType>;

export const localStorageKeys = {
  lastSearchTerm: "lastSearchTerm",
  lastResults: "lastResults",
};

const FetchTVShows: ApiFetchFunction<Show[], string> = async (name: string) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    const json = await res.json();
    localStorage.setItem(localStorageKeys.lastSearchTerm, name);
    localStorage.setItem(localStorageKeys.lastResults, JSON.stringify(json));
    // console.log(json);
    return json;
  } catch (err) {
    console.log(err, "There is a problem getting your shows");
  }
};

export default FetchTVShows;
