import { Show } from "../modules/ShowTypes";

export type ApiFetchFunction<ResponseType, RequestArgument = void> = (
  arg: RequestArgument
) => Promise<ResponseType>;

const FetchTVShows: ApiFetchFunction<Show[], string> = async (name: string) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    const json = await res.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err, "There is a problem getting your shows");
  }
};

export default FetchTVShows;
