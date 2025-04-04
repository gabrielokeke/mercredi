import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Form from "./Pages/Form";

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetch("http://localhost:5000/books") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home books={books} loading={loading} error={error} />} />
        <Route path="/Profile" element={<Profile user={user} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form setUser={setUser} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
