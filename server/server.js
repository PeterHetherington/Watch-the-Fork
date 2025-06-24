import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN // .env variable
})

// Routes
// Root route
app.get('/', (req, res) => {
    res.json('on root route')
})

// get game info
app.get('/games', async (req, res) => {
    const result = await db.query(`SELECT * FROM games ORDER BY name ASC`)
    res.json(result.rows)
})

// get game + ratings
app.get('/gameReviews', async (req, res) => {
    const result = await db.query(`SELECT g.name, g.genre, g.description, g.maxplayers, ROUND(AVG(gr.rating), 1) AS avg_rating FROM games g JOIN gamereviews gr on g.id = gr.game_id GROUP BY g.name, g.genre, g.description, g.maxplayers ORDER BY g.name ASC`)
    res.json(result.rows)
}) 

// get random game
app.get('/randGame', async (req, res) => {
    const result = await db.query(`SELECT g.name, g.genre, g.description, g.maxplayers, ROUND(AVG(gr.rating), 1) AS avg_rating FROM games g JOIN gamereviews gr on g.id = gr.game_id GROUP BY g.name, g.genre, g.description, g.maxplayers ORDER BY RANDOM() LIMIT 1`)
    res.json(result.rows)
})


// get movies

app.listen(8080, ()  => {
    console.log(`server running on port 8080`)
})