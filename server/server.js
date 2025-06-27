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
  const id = req.query.id;
  // console.log(id)
  const result = await db.query(
    `SELECT 
  m.name, 
  mr.name AS user_name,
  mr.user_ratings AS review_rating,
  mr.reviews
FROM movies m
JOIN movie_reviews mr ON m.id = mr.movies_id
WHERE m.id = $1;`,
    [id]
  );
  // console.log(result)
  res.json(result.rows);
});

// get a random movie
app.get(`/randomMovie`, async (req, res) => {
  const result = await db.query(
    `SELECT m.id, m.name, m.genre, m.description, m.rating, ROUND(AVG(mr.user_ratings), 1) AS avg_rating FROM movies m JOIN movie_reviews mr ON m.id = mr.movies_id GROUP BY m.id, m.name, m.genre, m.description, m.rating ORDER BY RANDOM() LIMIT 1`
  );
  res.json((await result).rows);
});

// POST form to movie reviews
app.post("/moviesreviews", async (req, res) => {
  const body = req.body;
  const name = body.name;
  const moviesID = body.id;
  const reviews = body.review;
  const userRatings = body.rating;

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

app.get("/gameReviews", async (req, res) => {
  const id = req.query.id; // get value from query string
  const result = await db.query(
    `SELECT gr.name AS user_name, g.name, g.id, gr.review, gr.rating FROM games g JOIN gamereviews gr on g.id = gr.game_id WHERE g.id = $1`,

    [id]
  );
  // console.log(result)
  res.json(result.rows);
});

// get random game
app.get("/randGame", async (req, res) => {
  const result = await db.query(
    `SELECT g.id, g.name, g.genre, g.description, g.maxplayers, ROUND(AVG(gr.rating), 1) AS avg_rating FROM games g JOIN gamereviews gr on g.id = gr.game_id GROUP BY g.id, g.name, g.genre, g.description, g.maxplayers ORDER BY RANDOM() LIMIT 1`
  );
  res.json(result.rows);
});

// ! LIKES
// get game review likes
app.get('/likes', async (req, res)=> {
    const id = req.query.id
    const result = await db.query(`SELECT id, likes FROM gameReviews WHERE id=$1`, [id])
    res.json(result.rows)
})

// get movie review likes
app.get('/likes', async (req, res)=> {
    const id = req.query.id
    const result = await db.query(`SELECT id, likes FROM movie_reviews WHERE id=$1`, [id])
    res.json(result.rows)
})

// UPDATE game review likes POST route
app.post('/likes', async (req, res) =>{
    const body = req.body
    const idFromClient = req.body.id
    const likesFromClient = req.body.likes
    // console.log(body)
    // console.log(idFromClient)
    // console.log(likesFromClient)
    const data = await db.query(`UPDATE gameReviews SET likes=$1 WHERE id=$2`, [likesFromClient, idFromClient])
    res.send('Done')
})

// UPDATE movie review likes
app.post('/likes', async (req, res) =>{
    const body = req.body
    const idFromClient = req.body.id
    const likesFromClient = req.body.likes
    // console.log(body)
    // console.log(idFromClient)
    // console.log(likesFromClient)
    const data = await db.query(`UPDATE movie_reviews SET likes=$1 WHERE id=$2`, [likesFromClient, idFromClient])
    res.send('Done')
})


// POST
// post form to games
app.post("/gameReviews", async (req, res) => {
  const body = req.body;
  // console.log(body)

  const nameFromClient = req.body.name;
  const gameIdFromClient = req.body.id;
  const reviewFromClient = req.body.review;
  const ratingFromClient = req.body.rating;

  const data = await db.query(
    `INSERT INTO gameReviews (name, game_id, review, rating) VALUES ($1, $2, $3, $4)`,
    [nameFromClient, gameIdFromClient, reviewFromClient, ratingFromClient]
  );

  res.send("Done");
});

app.listen(8080, () => {
  console.log(`server running on port 8080`);
});
