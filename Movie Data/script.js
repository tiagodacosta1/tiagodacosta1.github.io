// movies.js
let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

// Select the movies div
const moviesDiv = document.querySelector("#movies");

// Render the movie data onto the webpage
function renderMovies() {
  moviesDiv.innerHTML = "";

  for (const [title, movie] of Object.entries(movieData)) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const plotElement = document.createElement("p");
    plotElement.textContent = `Plot: ${movie.plot}`;

    const castElement = document.createElement("p");
    castElement.textContent = `Cast: ${movie.cast.join(", ")}`;

    const runtimeElement = document.createElement("p");
    runtimeElement.textContent = `Runtime: ${movie.runtime} minutes`;

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating: ${movie.rating}/10`;

    const yearElement = document.createElement("p");
    yearElement.textContent = `Year: ${movie.year}`;

    movieElement.appendChild(titleElement);
    movieElement.appendChild(plotElement);
    movieElement.appendChild(castElement);
    movieElement.appendChild(runtimeElement);
    movieElement.appendChild(ratingElement);
    movieElement.appendChild(yearElement);

    moviesDiv.appendChild(movieElement);
  }
}

renderMovies();

// Allow the user to sort the movies by year
const sortButton = document.createElement("button");
sortButton.textContent = "Sort by Year";
sortButton.addEventListener("click", () => {
  const sortedMovies = Object.entries(movieData).sort(
    (a, b) => a[1].year - b[1].year
  );

  movieData = Object.fromEntries(sortedMovies);
  renderMovies();
});

document.body.insertBefore(sortButton, moviesDiv);

// Allow the user to add a new movie
const addButton = document.createElement("button");
addButton.textContent = "Add Movie";
addButton.addEventListener("click", () => {
  const title = prompt("Enter the title of the movie:");
  if (!title) return;

  const plot = prompt("Enter the plot of the movie:");
  if (!plot) return;

  const cast = prompt("Enter the cast of the movie (separated by commas):")
    .split(",")
    .map((actor) => actor.trim());
  if (!cast) return;

  const runtime = parseInt(prompt("Enter the runtime of the movie (in minutes):"));
  if (!runtime) return;

  const rating = parseFloat(prompt("Enter the rating of the movie (out of 10):"));
  if (!rating) return;

  const year = parseInt(prompt("Enter the year the movie was released:"));
  if (!year) return;

  movieData[title] = { plot, cast, runtime, rating, year };
  renderMovies();
});

document.body.insertBefore(addButton, moviesDiv);
