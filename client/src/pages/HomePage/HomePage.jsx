import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookCard from "../../components/BookCard/BookCard";
import "./HomePage.scss";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      console.log("Searching for:", query);
      const response = await axios.get(
        `http://localhost:8000/search?query=${query}`
      );
      console.log("API Response:", response.data);
      console.log(response.data);
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="home">
      <div className="home__content">
        <Hero />
        <div className="home__search">
          <h1 className="home__search-title">Find Your Book!!</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
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
