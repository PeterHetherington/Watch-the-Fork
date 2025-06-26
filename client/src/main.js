const random = document.getElementById("random");

const app = document.getElementById("app");

const movieBtn = document.getElementById("movies");
const gameBtn = document.getElementById("games");

// test environment
const test = `http://localhost:8080`;
const live = `https://indecisive-app-server.onrender.com`;
const BASE_URL = test;

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

const modCon = document.getElementById("modalContainer");

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
  revBtn.innerText = "Leave a review";
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


  // show reviews listed
  const showRevBtn = document.createElement("button");
  showRevBtn.innerText = "Reviews";
  showRevBtn.value = `${game.id}`;

  showRevBtn.addEventListener("click", async (event) => {
    console.log(showRevBtn);
    showGameReviewsModal(showRevBtn.value);
  });

  gameContainer.append(h2, details, p3, revBtn, showRevBtn);
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
  revBtn.innerText = "Leave a review";

  revBtn.value = `${movie.id}`;
  revBtn.className = "reviewBtn";

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

  movieContainer.append(h2, details, p3, revBtn, showRevBtn);
  app.appendChild(movieContainer);
}

async function fetchGameReviewsById(gameId) {
  const res = await fetch(`${BASE_URL}/gameReviews?id=${gameId}`); //query string to pull from the reviews table specifically the movie ID
  const games = await res.json();
  return games;
}

async function showGameReviewsModal(game) {
  const reviews = await fetchGameReviewsById(game);
  console.log(reviews);
  const modal = document.getElementById("modal-reviews");
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
  const modal = document.getElementById("modal-reviews");
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
  app.innerHTML = "";
  createMovieCard();
});

gameBtn.addEventListener("click", (event) => {
  app.innerHTML = "";
  createGameCard();
});


// get form data
const form = document.getElementById('form')
// add event listener to form
form.addEventListener('submit', async (event) =>{
  event.preventDefault()

  const formData = new FormData(form)

  const data = Object.fromEntries(formData)

  // form validation
  if(!data.name || data.rating > 10 || data.rating < 0){
    alert("Unable to post review, Username & rating required")
    return;
  }
  // check of game or movie
  if (data.category == 'game'){
    console.log('try to submit game')
    console.log(data)
    try{
      const res = await fetch(`${BASE_URL}/gameReviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if(!res.ok){
        throw new error("HTTP error");
      }
      form.reset();
      modal.close();
      alert("Review posted, Thank you!")
    }catch(error){
      console.log(error);
      alert("Unable to submit review")
    }
  } else if (data.category == 'movie'){
    console.log('try to submit movie')
    console.log(data)
    try{
      const res = await fetch(`${BASE_URL}/moviesreviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if(!res.ok){
        throw new error("HTTP error");
      }
      form.reset();
      modal.close();
      alert("Review posted, Thank you!")
    }catch(error){
      console.log(error);
      alert("Unable to submit review")
    }
  } else {
    alert('Error: could not process review submission')
    return;
  }

})