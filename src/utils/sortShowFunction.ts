export enum SortShowsTypes {
  SCORE = "score",
  NAME = "name",
  RATING = "rating",
}

// sort modifies the original array
// will have conflicts if two different screens need to use this function

// TODO: cut down on repetition (get it into one if/else)
// TODO: use one Sort function into other value function

const sortShowsBy = (val: SortShowsTypes, data: any[], isReversed: boolean) => {
  console.log("sortingShows");
  // copied the array
  const sortedShowsBy = [...data];
  // sorting copy of array
  if (val === SortShowsTypes.SCORE) {
    return sortedShowsBy.sort((a, b) =>
      a[val] > b[val] ? 1 : a[val] < b[val] ? -1 : 0
    );
  } else if (val === SortShowsTypes.RATING) {
    // need to put nulls at bottom
    if (isReversed) {
      return sortedShowsBy.sort((a, b) =>
        a.show[val].average < b.show[val].average
          ? -1
          : a.show[val].average > b.show[val].average
          ? 1
          : 0
      );
    } else {
      return sortedShowsBy.sort((a, b) =>
        a.show[val].average < b.show[val].average
          ? 1
          : a.show[val].average > b.show[val].average
          ? -1
          : 0
      );
    }
    // standard if statement
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
  if (isReversed) {
    return data.sort((a, b) =>
      a.show[val] > b.show[val] ? 1 : a.show[val] < b.show[val] ? -1 : 0
    );
  } else {
    return data.sort((a, b) =>
      a.show[val] > b.show[val] ? -1 : a.show[val] < b.show[val] ? 1 : 0
    );
  }
};

export default sortShowsBy;

// by default, sort the results by `score`, allow the user to sort by `name` or `rating` as well
