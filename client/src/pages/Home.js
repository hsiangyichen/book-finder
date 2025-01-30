import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
    const [books, setBooks] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`http://localhost:8080/search?query=${query}`);
            setBooks(response.data.docs);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    return (
        <div>
            <h1>Book Finder</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="book-grid">
                {books.map((book) => (
                    <BookCard key={book.key} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Home;