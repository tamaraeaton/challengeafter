// const FetchTVShow = () => {
//   fetch("https://api.tvmaze.com/search/shows?q=superman")
//     .then((response) => response.json())
//     .then((data) => console.log(data[0].show.name))
//     .catch((err) => console.error(err));
// };

// export default FetchTVShow;

export interface FetchTVShowsAPIResponseType {
  // response_code: number;
  results: [
    {
      name: string;
      // rating: object;
      // difficulty: string;
      // question: string;
      // correct_answer: string;
      // incorrect_answers: string[];
    }
  ];
}

export type ApiFetchFunction<ResponseType, RequestArgument = void> = (
  name: RequestArgument
) => Promise<ResponseType>;

const FetchTVShows: ApiFetchFunction<FetchTVShowsAPIResponseType> = async (
  name
) => {
  try {
    // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);

    const res = await fetch("https://api.tvmaze.com/search/shows?q=superman");
    const json = await res.json();
    console.log("is this working?");
    return json;
  } catch (err) {
    console.log(err, "There is a problem getting your shows");
  }
};

export default FetchTVShows;
