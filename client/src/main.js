const random = document.getElementById("random");

const app = document.getElementById("app");

const movieBtn = document.getElementById("movies");
const gameBtn = document.getElementById("games");

// test environment
const test = `http://localhost:8080`;
const live = `https://indecisive-app-server.onrender.com`;
const BASE_URL = live;

// fetch random game data
async function fetchGames() {
  const res = await fetch(`${BASE_URL}/randGame`);
  const games = await res.json();
  return games;
}

// fetch random movie data
async function fetchMovies() {
  const res = await fetch(`${BASE_URL}/randomMovie`);
  const movies = await res.json();
  return movies;
}

// TODO
// get card display
const gameContainer = document.getElementById("gameContainer");
const movieContainer = document.getElementById("movieContainer");

// get modal
// const modal = document.getElementById('modal');
// modal.showModal()

const modCon = document.getElementById("modalContainer");

// create game card
async function createGameCard() {
  const data = await fetchGames();
  const game = data[0];
  gameContainer.innerHTML = "";

  const div = document.createElement("div");
  div.className = "card";
  const h2 = document.createElement("h2");
  h2.className = "title";
  h2.innerText = `${game.name}`;
  const p1 = document.createElement("p");
  p1.className = "rating";
  p1.innerText = `${game.avg_rating}`;
  const p2 = document.createElement("p");
  p2.className = "genre";
  p2.innerText = `${game.genre}`;
  const p3 = document.createElement("p");
  p3.className = "description";
  p3.innerText = `${game.description}`;
  const p4 = document.createElement("p");
  p4.className = "detail";
  p4.innerText = `${game.maxplayers}`;

  const revBtn = document.createElement("button");
  revBtn.innerText = "Review";
  revBtn.value = `${game.id}`;
  revBtn.className = "reviewBtn";
  revBtn.id = "gameReviewBtn";

  revBtn.addEventListener("click", async (event) => {
    // call create form function // possibly modal
    const modal = document.getElementById("modal");
    // assign category to form
    const con = document.getElementById("hiddenContainer");
    console.log(con);
    con.innerHTML = `<input id="category" hidden name="category" value="game">
      <input id="id" hidden name="id" value="${revBtn.value}">`;

    modal.showModal();
  });
  // show reviews listed
  const showRevBtn = document.createElement("button");
  showRevBtn.innerText = "Leave a Review";
  showRevBtn.value = `${game.id}`;

  showRevBtn.addEventListener("click", async (event) => {
    console.log(showRevBtn);
    showGameReviewsModal(showRevBtn.value);
  });

  div.append(h2, p1, p2, p3, p4, revBtn, showRevBtn);
  gameContainer.appendChild(div);
}
async function fetchGameReviewsById(gameId) {
  const res = await fetch(`${BASE_URL}/gameReviews?id=${gameId}`); //query string to pull from the reviews table specifically the movie ID
  const games = await res.json();
  return games;
}

async function showGameReviewsModal(game) {
  const reviews = await fetchGameReviewsById(game);
  console.log(reviews);
  const modal = document.getElementById("modal reviews");
  let content = `<h2>${reviews[0].name}</h2>`;
  // loop through each review and add it to the string
  for (let i = 0; i < reviews.length; i++) {
    const r = reviews[i];
    content += `<div class="review">
        Name: ${r.user_name}
        Rating: ${r.rating}
        Review: ${r.review}
        </div>`;
  }
  // I did have this in the loop but I got multiple close buttons.
  content += `<button id="closeReviewsModal">Close</button>`;

  modal.innerHTML = content;
  const closeBtn = document.getElementById("closeReviewsModal");
  closeBtn.addEventListener("click", function () {
    modal.close();
  });
  modal.showModal();
}

// Get reviews for movies
async function fetchMovieReviewsById(movieId) {
  const res = await fetch(`${BASE_URL}/movieReviews?id=${movieId}`); //query string to pull from the reviews table specifically the movie ID
  const movies = await res.json();
  return movies;
}

async function showMovieReviewsModal(movie) {
  const reviews = await fetchMovieReviewsById(movie);
  console.log(reviews);
  const modal = document.getElementById("modal reviews");
  let content = `<h2>${reviews[0].name}</h2>`;
  // loop through each review and add it to the string
  for (let i = 0; i < reviews.length; i++) {
    const r = reviews[i];
    content += `<div class="review">
        Name: ${r.user_name}
        Rating: ${r.review_rating}
        Review: ${r.reviews}
        </div>`;
  }
  // I did have this in the loop but I got multiple close buttons.
  content += `<button id="closeReviewsModal">Close</button>`;

  modal.innerHTML = content;
  const closeBtn = document.getElementById("closeReviewsModal");
  closeBtn.addEventListener("click", function () {
    modal.close();
  });
  modal.showModal();
}

// create movie card
async function createMovieCard() {
  const data = await fetchMovies();
  const movie = data[0];
  movieContainer.innerHTML = "";

  const div = document.createElement("div");
  div.className = "card";
  const h2 = document.createElement("h2");
  h2.className = "title";
  h2.innerText = `${movie.name}`;
  const p1 = document.createElement("p");
  p1.className = "rating";
  p1.innerText = `${movie.avg_rating}`;
  const p2 = document.createElement("p");
  p2.className = "genre";
  p2.innerText = `${movie.genre}`;
  const p3 = document.createElement("p");
  p3.className = "description";
  p3.innerText = `${movie.description}`;
  const p4 = document.createElement("p");
  p4.className = "detail";
  p4.innerText = `${movie.rating}`;

  const revBtn = document.createElement("button");
  revBtn.innerText = "Leave a Review";
  revBtn.value = `${movie.id}`;

  revBtn.addEventListener("click", async (event) => {
    // call create form function // possibly modal
    const modal = document.getElementById("modal");
    // assign category to form
    const con = document.getElementById("hiddenContainer");
    console.log(con);
    con.innerHTML = `<input id="category" hidden name="category" value="movie">
      <input id="id" hidden name="id" value="${revBtn.value}">`;

    modal.showModal();
  });
  // show reviews listed
  const showRevBtn = document.createElement("button");
  showRevBtn.innerText = "Reviews";
  showRevBtn.value = `${movie.id}`;

  showRevBtn.addEventListener("click", async (event) => {
    console.log(showRevBtn);
    showMovieReviewsModal(showRevBtn.value);
  });

  div.append(h2, p1, p2, p3, p4, revBtn, showRevBtn);
  movieContainer.appendChild(div);
}

// add event listener to random button
random.addEventListener("click", (event) => {
  createGameCard();
  createMovieCard();
});

// enable closing the modal
const close = document.getElementById("closeModal");
close.addEventListener("click", () => {
  modal.close();
});

// update rating value on form to reflect rating currently chosen
const slider = document.getElementById("slider");
let value = document.getElementById("ratingValue");

slider.addEventListener("input", function (event) {
  value.innerText = event.target.value;
});

movieBtn.addEventListener("click", (event) => {
  gameContainer.innerHTML = "";
  movieContainer.innerHTML = "";
  createMovieCard();
});

gameBtn.addEventListener("click", (event) => {
  gameContainer.innerHTML = "";
  movieContainer.innerHTML = "";
  createGameCard();
});
