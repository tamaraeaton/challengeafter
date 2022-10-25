# Bounteous JavaScript Coding Challenge

​

## Instructions

​
You will be building an app that allows the user to enter text and search for TV shows. When a user searches, the results will be display below to the user. This app will be responsive and have a different user experience for "mobile" and "desktop". Example screenshots are available in `docs`. This project uses `npm` for adoptability. We intentionally give you a pretty blank project so you can have control on the libraries you bring in as well as implementation.
​

## Core Requirements

​- [XX] create a search input that allows the user to enter search text

- [x] can either be on "submit" button press or realtime
- [x] says "Enter TV Show" when no value is in the input
- [x] retrieve the search results from a HTTP GET request to `https://api.tvmaze.com/search/shows?q={SEARCH_TEXT}` where `{SEARCH_TEXT}` is the text from the search field
- [] processing the shows
  - [] by default, sort the results by `score`, allow the user to sort by `name` or `rating` as well
  - [] display the number of results found
  - [?] display the results (based on viewport below)
- [x] allow the user to select a show - opens a modal displaying more information about that show - the modal should display the following information for the selected show - `name` - `status` - `rating` - `image.medium` (or `public/placeholder.jpg` if not present) - `premiered` to `ended` (if show is not ended, just show `premiered`)
      ​

### Mobile Viewport: < 768px

​
results will be in a list, displaying the show's `name`, the medium `image` (or `public/placeholder.jpg` if no image), and the show's `rating`.
​
_example of this layout can be seen in `docs/mobile-results.jpg`_
​

### Desktop Viewport: >= 768px

​
results will be in a tile format, showing 4 shows in a single row and left aligned. A given tile will show the show's `name`, the medium `image` (or `public/placeholder.jpg` if no image), and the show's `rating`.
​
_example of this layout can be seen in `docs/desktop-results.jpg`_
​

## Bonus Features

​
None of the items below are required for submission. They each touch on other aspects of building web applications and are available to you to show more of your skills.
​

- [] implementing a basic theme by adding custom fonts, colors, etc
- [] add secondary controls after search results are provided to filter the list (ex. genre, status, country, etc)
- [] persist search text and results between page refreshes
- [] allow for the `s` query parameter to automatically fill and search, allowing for deeplinking (ex. `?s=superman`)
- [] unit testing with `react-testing-library` and `jest`
- [] a11y improvements to make the app more accessible
- [] add routing, creating another page when clicking on a movie instead of displaying a modal
- [] track search history (the text search, not the results)
- [] export results to CSV file
