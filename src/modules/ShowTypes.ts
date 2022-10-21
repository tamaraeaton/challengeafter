export interface Show {
  // float
  score: number;
  show: {
    id: number;
    //     url: "https://www.tvmaze.com/shows/7073/superman";
    name: string;
    //     type: "Animation";
    //     language: "English";
    //     genres: ["Action", "Adventure", "Science-Fiction"];
    //     status: "Ended";
    //     runtime: 30;
    //     averageRuntime: 30;
    //     premiered: "1988-09-17";
    //     ended: "1988-12-17";
    //     officialSite: null;
    //     schedule: { time: "08:30"; days: ["Saturday"] };
    rating: { average: number | null }; // { average: null }
    //     weight: 71;
    //     network: {
    //       id: 2;
    //       name: "CBS";
    //       country: {
    //         name: "United States";
    //         code: "US";
    //         timezone: "America/New_York";
    //       };
    //       officialSite: "https://www.cbs.com/";
    //     };
    //     webChannel: null;
    //     dvdCountry: null;
    //     externals: { tvrage: 5408; thetvdb: 71161; imdb: "tt0213370" };
    image: { medium: string; original: string };
    //   {
    //   medium: "https://static.tvmaze.com/uploads/images/medium_portrait/26/66186.jpg";
    //   original: "https://static.tvmaze.com/uploads/images/original_untouched/26/66186.jpg";
    // };

    //     summary: "<p><b>Superman </b>is a 1988 animated Saturday morning television series produced by Ruby-Spears Productions and Warner Bros. Television that aired on CBS featuring the DC Comics superhero of the same name (coinciding with the character's 50th anniversary, along with the live-action Superboy TV series that year). Veteran comic book writer Marv Wolfman was the head story editor, and noted comic book artist Gil Kane provided character designs.</p>";
    //     updated: 1634475247;
    //     _links: {
    //       self: { href: "https://api.tvmaze.com/shows/7073" };
    //       previousepisode: { href: "https://api.tvmaze.com/episodes/406329" };
    //     };
  };
}
