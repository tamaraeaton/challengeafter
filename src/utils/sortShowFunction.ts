import { Show } from "../modules/ShowTypes";

export enum SortShowsTypes {
  SCORE = "score",
  NAME = "name",
  RATING = "rating",
}

const sortShowsBy = (val: SortShowsTypes, data: any[]) => {
  console.log(val);
  if (val === SortShowsTypes.SCORE) {
    return data.sort((a, b) =>
      a[val] > b[val] ? 1 : a[val] < b[val] ? -1 : 0
    );
  } else if (val === SortShowsTypes.RATING) {
    // need to put nulls at bottom
    return data.sort((a, b) =>
      a.show[val].average < b.show[val].average
        ? 1
        : a.show[val].average > b.show[val].average
        ? -1
        : 0
    );
    // return data.sort((a, b) => {
    //   if (a.show[val].average === null) {
    //     return 1;
    //   }
    //   if (b.show[val].average === null) {
    //     return -1;
    //   }
    //   if (a === b) {
    //     return 0;
    //   }
    //   return a < b ? -1 : 1;
    // });
  }
  return data.sort((a, b) =>
    a.show[val] > b.show[val] ? 1 : a.show[val] < b.show[val] ? -1 : 0
  );
};

export default sortShowsBy;

// by default, sort the results by `score`, allow the user to sort by `name` or `rating` as well
