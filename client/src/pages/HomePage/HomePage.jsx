import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookCard from "../../components/BookCard/BookCard";
// import booksData from "../../data/books";
import "./HomePage.scss";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query) => {
    try {
        console.log("Searching for:", query);
        const response = await axios.get(`http://localhost:8080/search?query=${query}`);
        console.log("API Response:", response.data);
        console.log(response.data);
        setBooks(response.data.docs);
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

  // const searchBooks = (query) => {
  //   setSearchQuery(query);
  //   const filteredBooks = booksData.filter((book) =>
  //     book.title.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setBooks(filteredBooks);
  // };

  return (
    <div className="home">
      <div className="home__content">
        <SearchBar onSearch={handleSearch} />
        <div className="home__book-list">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
