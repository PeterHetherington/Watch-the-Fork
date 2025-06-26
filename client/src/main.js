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
const gameContainer = document.createElement('div');
gameContainer.className = 'gameContainer'
const movieContainer = document.createElement('div');
movieContainer.className = 'movieContainer'

// get modal
// const modal = document.getElementById('modal');
// modal.showModal()

const modCon = document.getElementById('modalContainer');

// create game card
async function createGameCard() {
  const data = await fetchGames();
  const game = data[0];
  gameContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.className = "title";
  h2.innerText = `${game.name}`;
  const p1 = document.createElement("p");
  p1.className = "rating";
  p1.innerText = `${game.avg_rating}` + ` ★`;
  const p2 = document.createElement("p");
  p2.className = "genre";
  p2.innerText = `${game.genre}`;
  const p3 = document.createElement("p");
  p3.className = "description";
  p3.innerText = `${game.description}`;
  const p4 = document.createElement("p");
  p4.className = "detail";
  p4.innerText = `${game.maxplayers}`;

  const details = document.createElement('div')
  details.append(p2, p4, p1)
  details.className = 'details'

  const revBtn = document.createElement("button");
  revBtn.innerText = "Review";
  revBtn.value = `${game.id}`;
  revBtn.className = "reviewBtn";
  revBtn.id = "gameReviewBtn"

  revBtn.addEventListener("click", async (event) => {
    // call create form function // possibly modal
    const modal = document.getElementById('modal');
    // assign category to form
    const con = document.getElementById('hiddenContainer');
    console.log(con)
    con.innerHTML = `<input id="category" hidden name="category" value="game">
      <input id="id" hidden name="id" value="${revBtn.value}">`
    
    modal.showModal()
  });

  gameContainer.append(h2, details, p3, revBtn);
  app.append( gameContainer);
}

// create movie card
async function createMovieCard() {
  const data = await fetchMovies();
  const movie = data[0];
  movieContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.className = "title";
  h2.innerText = `${movie.name}`;
  const p1 = document.createElement("p");
  p1.className = "rating";
  p1.innerText = `${movie.avg_rating}` + ` ★`;
  const p2 = document.createElement("p");
  p2.className = "genre";
  p2.innerText = `${movie.genre}`;
  const p3 = document.createElement("p");
  p3.className = "description";
  p3.innerText = `${movie.description}`;
  const p4 = document.createElement("p");
  p4.className = "detail";
  p4.innerText = `${movie.rating}`;

  const details = document.createElement('div')
  details.append(p2, p4, p1)
  details.className = 'details'

  const revBtn = document.createElement("button");
  revBtn.innerText = "Review";
  revBtn.value = `${movie.id}`;
  revBtn.className = "reviewBtn";

  revBtn.addEventListener("click", async (event) => {
    // call create form function // possibly modal
    const modal = document.getElementById('modal');
    // assign category to form
    const con = document.getElementById('hiddenContainer');
    console.log(con)
    con.innerHTML = `<input id="category" hidden name="category" value="movie">
      <input id="id" hidden name="id" value="${revBtn.value}">`
    
    modal.showModal()
  });

  movieContainer.append(h2, details, p3, revBtn);
  app.appendChild(movieContainer);
}

// add event listener to random button
random.addEventListener("click", (event) => {
  createGameCard();
  createMovieCard();
});

// enable closing the modal
const close = document.getElementById('closeModal');
close.addEventListener('click', ()=> {
  modal.close()
})

// update rating value on form to reflect rating currently chosen
const slider = document.getElementById('slider');
let value = document.getElementById('ratingValue');

slider.addEventListener("input", function(event){
  value.innerText= event.target.value;
})


movieBtn.addEventListener("click", (event) => {
  app.innerHTML = "";
  createMovieCard();
});


gameBtn.addEventListener("click", (event) => {
  app.innerHTML = "";
  createGameCard();
});
