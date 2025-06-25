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










// // display the outputs in the form of cards
// async function displayOutputs() {
// 	app.innerHTML = '';

// 	// reset the user input rating system
// 	// xyz.reset();

// 	// const outputs = await fetchData();

// 	outputs.forEach((output) => {
// 		const divCard = document.createElement('div');
// 		const h2Title = document.createElement('h2');
// 		const pSynopsis = document.createElement('p');

// 		// images are under question
// 		// const imgBg = document.createElement('img')

// 		const divDetails = document.createElement('div');

// 		// check database and add more h3 if needed
// 		const h3Details1 = document.createElement('h3');
// 		const h3Details2 = document.createElement('h3');
// 		const h3Details3 = document.createElement('h3');

// 		const divForm = document.createElement('div');

// 		// ! add a rating input in the form (need to do some reading)
// 		const form = document.createElement('form');
// 		const h4CTA = document.createElement('h4');

// 		// event listensers for movie and games buttons selection
// 		// ! update to match database - movies
// 		movieBtn.addEventListener('click', () => {
// 			h2Title.innerText = 'movies.name';

// 			h3Details2.innerText = 'movies.genre';
// 			h3Details3.innerText = 'movies.rating';

// 			pSynopsis.innerText = 'movies.description';

			
// 			h4CTA.innerText = 'How much did you enjoy this movie?';
// 		});

// 		// ! update to match database - games
// 		gameBtn.addEventListener('click', () => {
// 			h2Title.innerText = 'game.title';

// 			h3Details1.innerText = 'game.year';
// 			h3Details2.innerText = 'game.genre';
// 			h3Details3.innerText = 'game.rating';

// 			pSynopsis.innerText = 'game.synopsis';

// 			h4CTA.innerText = 'How much did you enjoy this game?';
// 		});

// 		// append all details
// 		divDetails.append(h3Details1, h3Details2, h3Details3);

// 		// append form
// 		divForm.append(h4CTA, form);

// 		divCard.append(h2Title, divDetails, pSynopsis, divForm);

// 		app.appendChild(divCard);

// 		//

// 		form.addEventListener('submit', async (event) => {
// 			event.preventDefault();

// 			const formData = new FormData(form);
// 			const userInput = Object.fromEntries(formData);

// 			const res = await fetch('http://', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},

// 				body: JSON.stringify(userInput),
// 			});
// 		});
// 	});
// }

// displayOutputs();

// move if needed
// random.addEventListener(() => {
// 	movieBtn.addEventListener(() => {
// 		movieBtnClicked();
// 	});
// 	gameBtn.addEventListener(() => {
// 		gameBtnClicked();
// 	});

// 	displayOutputs();
// });

//
// move below functions inside displayOutputs();
function movieBtnClicked() {
	// ! update to match database - movies
	// from addEventListener to moviesBtn
}

function gameBtnClicked() {
	// ! update to match database - games
	// from addEventListener to gameBtn
}
