import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN, // .env variable
});

// Routes
// Root route
app.get("/", (req, res) => {
  res.json("on root route");
});

// get movie info
app.get("/movies", async (req, res) => {
  const result = await db.query(`SELECT * FROM movies ORDER BY name ASC`);
  res.json(result.rows);
});

// get reviews & ratings from each movies
app.get(`/movieReviews`, async (req, res) => {
  const result = db.query(
    `SELECT m.name, m.genre, m.description, m.rating, ROUND(AVG(mr.user_ratings), 1) AS avg_rating FROM movies m JOIN movie_reviews mr ON m.id = mr.movies_id GROUP BY m.name, m.genre, m.description, m.rating ORDER BY m.name ASC`
  );
  res.json((await result).rows);
});

// get a random movie
app.get(`/randomMovie`, async (req, res) => {
  const result = await db.query(
    `SELECT m.name, m.genre, m.description, m.rating, ROUND(AVG(mr.user_ratings), 1) AS avg_rating FROM movies m JOIN movie_reviews mr ON m.id = mr.movies_id GROUP BY m.name, m.genre, m.description, m.rating ORDER BY RANDOM() LIMIT 1`
  );
  res.json((await result).rows);
});

// POST form to movie reviews
app.post("/moviesreviews", async (req, res) => {
  const body = req.body;
  const name = body.name;
  const moviesID = body.movies_id;
  const reviews = body.reviews;
  const userRatings = body.user_ratings;

  const data = await db.query(
    `INSERT INTO movie_reviews (name, movies_id, reviews, user_ratings) VALUES ($1, $2, $3, $4)`,
    [name, moviesID, reviews, userRatings]
  );
  res.send("Done");
});

// get game info
app.get("/games", async (req, res) => {
  const result = await db.query(`SELECT * FROM games ORDER BY name ASC`);
  res.json(result.rows);
});

// get reviews & ratings from specified game

app.get('/gameReviews', async (req, res) => {
  const id = req.query.id // get value from query string
  const result = await db.query(`SELECT g.name, g.id, gr.review, gr.rating FROM games g JOIN gamereviews gr on g.id = gr.game_id WHERE g.id = $1`, [id])
  res.json(result.rows)
}) 

// get random game
app.get('/randGame', async (req, res) => {
    const result = await db.query(`SELECT g.id, g.name, g.genre, g.description, g.maxplayers, ROUND(AVG(gr.rating), 1) AS avg_rating FROM games g JOIN gamereviews gr on g.id = gr.game_id GROUP BY g.id, g.name, g.genre, g.description, g.maxplayers ORDER BY RANDOM() LIMIT 1`)
    res.json(result.rows)
})

// POST
// post form to games
app.post('/gameReviews', async (req, res) => {
  const body = req.body
  // console.log(body)

  const nameFromClient = req.body.name
  const gameIdFromClient = req.body.game_id
  const reviewFromClient = req.body.review
  const ratingFromClient = req.body.rating

  const data = await db.query(`INSERT INTO gameReviews (name, game_id, review, rating) VALUES ($1, $2, $3, $4)`, [nameFromClient, gameIdFromClient, reviewFromClient, ratingFromClient])

  res.send('Done')
})

app.listen(8080, () => {
  console.log(`server running on port 8080`);
});
