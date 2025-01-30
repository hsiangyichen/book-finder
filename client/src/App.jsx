import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
        </Router>
    );
}

export default App;