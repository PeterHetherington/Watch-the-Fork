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

app.listen(8080, ()  => {
    console.log(`server running on port 8080`)
})