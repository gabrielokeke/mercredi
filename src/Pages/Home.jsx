import React, { useState, useEffect } from "react";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Échec de la récupération des livres");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 style={styles.page}>Bienvenue sur la page d'accueil</h2>

      {loading ? <p>Chargement des livres...</p> : null}
      {error ? <p style={{ color: "red" }}>Erreur : {error}</p> : null}

      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi voluptate est repudiandae dolorum laborum obcaecati corporis hic quod ex, non, magni sapiente ad, in aspernatur possimus a sequi saepe. <br />
      </p>
    </>
  );
}

const styles = {
  page: { padding: "20px", textAlign: "center" },
  paragraph: { fontFamily: "Times New Roman", color: "black", textAlign: "center" },
};

export default Home;
