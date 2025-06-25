const random = document.getElementById('random');

const app = document.getElementById('app');

const movieBtn = document.getElementById('movies');
const gameBtn = document.getElementById('games');

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
const gameContainer = document.getElementById('gameContainer')
const movieContainer = document.getElementById('movieContainer')

// create game card
async function createGameCard() {
    const data = await fetchGames()
	const game = data[0]
	console.log(data)
    gameContainer.innerHTML = ''

    const div = document.createElement('div')
    div.className = 'card'
    const h2 = document.createElement('h2')
    h2.className = 'title'
    h2.innerText = `${game.name}`
    const p1 = document.createElement('p')
    p1.className = 'rating'
    p1.innerText = `${game.avg_rating}`
    const p2 = document.createElement('p')
    p2.className = 'genre'
    p2.innerText = `${game.genre}`
    const p3 = document.createElement('p')
    p3.className = 'description'
    p3.innerText = `${game.description}`
    const p4 = document.createElement('p')
    p4.className = 'detail'
    p4.innerText = `${game.maxplayers}`

    const revBtn = document.createElement('button')
    revBtn.innerText = 'Review'
    revBtn.value = `${game.id}`
    revBtn.className = 'reviewBtn'

    revBtn.addEventListener('click', async (event) =>{
        const id = revBtn.value
        // call create form function // possibly modal
    })

    div.append(h2, p1, p2, p3, p4, revBtn)
	gameContainer.appendChild(div)
}

// add event listener to random button
random.addEventListener('click', (event) => {
	createGameCard()
})








function renderMovieCard(movie) {
  const divCard = document.createElement("div");
  divCard.className = "card moviecard";
  divCard.innerHTML = `<h2>${movie.name}
	</h2>
	<p>Genre: ${movie.genre}</p>
	<p>Description: ${movie.description}</p>
	<p>Rating ${movie.rating}</p>
	<p>AverageUserRating: ${movie.avg_rating ?? "N/A"}</p>
	<buttonclass="open-review-dialog">Leave a Review</button>
`;
  return divCard;
}

random.addEventListener("click", async () => {
  app.innerHTML = "";
  const movie = movieArray[0];
  app.appendChild(renderMovieCard(movie));
});



function movieBtnClicked() {
	// ! update to match database - movies
	// from addEventListener to moviesBtn
}

function gameBtnClicked() {
	// ! update to match database - games
	// from addEventListener to gameBtn
}

