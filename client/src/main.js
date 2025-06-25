// change the random button id to match html
const random = document.getElementById('id');

// change the card div id to match html
const app = document.getElementById('app');

// change the button ids to match html
const movieBtn = document.getElementById('id');
const gameBtn = document.getElementById('id');

// test environment
const test = `http://localhost:8080`
const live = `https://indecisive-app-server.onrender.com`
const BASE_URL = live

// fetch random game data
async function fetchGames() {
	const res = await fetch(`${BASE_URL}/randGame`)
	const games = await res.json()
	return games
}

// fetch random movie data
async function fetchMovies() {
	const res = await fetch(`${BASE_URL}/randomMovie`)
	const movies = await res.json()
	return movies
}




// display the outputs in the form of cards
async function displayOutputs() {
	app.innerHTML = '';

	// reset the user input rating system
	// xyz.reset();

	const outputs = await fetchData();

	outputs.forEach((output) => {
		const divCard = document.createElement('div');
		const h2Title = document.createElement('h2');
		const pSynopsis = document.createElement('p');

		// images are under question
		// const imgBg = document.createElement('img')

		const divDetails = document.createElement('div');

		// check database and add more h3 if needed
		const h3Details1 = document.createElement('h3');
		const h3Details2 = document.createElement('h3');
		const h3Details3 = document.createElement('h3');

		const divForm = document.createElement('div');

		// ! add a rating input in the form (need to do some reading)
		const form = document.createElement('form');
		const h4CTA = document.createElement('h4');

		// event listensers for movie and games buttons selection
		// ! update to match database - movies
		movieBtn.addEventListener('click', () => {
			h2Title.innerText = 'movie.title';

			h3Details1.innerText = 'movie.year';
			h3Details2.innerText = 'movie.genre';
			h3Details3.innerText = 'movie.rating';

			pSynopsis.innerText = 'movie.synopsis';

			h4CTA.innerText = 'How much did you enjoy this movie?';
		});

		// ! update to match database - games
		gameBtn.addEventListener('click', () => {
			h2Title.innerText = 'game.title';

			h3Details1.innerText = 'game.year';
			h3Details2.innerText = 'game.genre';
			h3Details3.innerText = 'game.rating';

			pSynopsis.innerText = 'game.synopsis';

			h4CTA.innerText = 'How much did you enjoy this game?';
		});

		// append all details
		divDetails.append(h3Details1, h3Details2, h3Details3);

		// append form
		divForm.append(h4CTA, form);

		divCard.append(h2Title, divDetails, pSynopsis, divForm);

		app.appendChild(divCard);

		//

		form.addEventListener('submit', async (event) => {
			event.preventDefault();

			const formData = new FormData(form);
			const userInput = Object.fromEntries(formData);

			const res = await fetch('http://', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(userInput),
			});
		});
	});
}

displayOutputs();
