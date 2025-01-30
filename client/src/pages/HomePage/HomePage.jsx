import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookCard from "../../components/BookCard/BookCard";
import booksData from "../../data/books";
import "./HomePage.scss";
// import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState(booksData);
  const [searchQuery, setSearchQuery] = useState("");

  // const searchBooks = async (query) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/search?q=${query}`
  //     );
  //     setBooks(response.data);
  //   } catch (error) {
  //     console.error("Error fetching books:", error);
  //   }
  // };

  const searchBooks = (query) => {
    setSearchQuery(query);
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="home">
      <div className="home__content">
        <Hero />
        <SearchBar onSearch={searchBooks} />
        <div className="home__book-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
