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

app.listen(8080, () => {
  console.log(`server running on port 8080`);
});
