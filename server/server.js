
import express from "express";
import cors from 'cors';
const app = express();
app.use(cors())



// const quoteURL = 'https://api.quotable.io/random';
const quoteURL = 'https://official-joke-api.appspot.com/jokes/random';


app.get('/random', async (req, res) => {
    try {
        const response = await fetch(quoteURL);
        const data = await response.json();
        res.json(data);
        

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quote." });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));