import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = "https://openlibrary.org/search.json";

app.get("/", (req, res) => {
    res.send("Welcome to the Book Finder API! Use /search?query=bookname to search for books.");
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

app.listen(8080, () => console.log("Server running on port http://localhost:8080"));

// import express from "express";
// import cors from "cors";
// import axios from "axios";

// const app = express();
// const PORT = 5000;

// app.use(cors());

// app.get("/search", async (req, res) => {
//     const query = req.query.query;
//     if (!query) {
//         return res.status(400).json({ error: "Query parameter is required" });
//     }

//     try {
//         const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
//         const books = response.data.docs.map(book => ({
//             title: book.title || "No Title Available",
//             author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
//             first_publish_year: book.first_publish_year || "Unknown Year",
//             cover_url: book.cover_i
//                 ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
//                 : "https://via.placeholder.com/150"
//         }));

//         res.json(books);
//     } catch (error) {
//         console.error("Error fetching book data:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });