import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = "https://openlibrary.org/search.json";

app.get("/", (req, res) => {
  res.send(
    "Welcome to the Book Finder API! Use /search?query=bookname to search for books."
  );
});

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8000, () =>
  console.log("Server running on port http://localhost:8000")
);
