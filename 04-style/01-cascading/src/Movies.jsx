import React from "react";
import Movie from "./Movie.jsx";
import "./movies.css";

const Movies = () => (
  <section>
    <h2 className="title">Movies</h2>
    <Movie
      title="Avatar 2"
      desc="One wasn't enough"
    />
    <Movie
      title="Spider-Man: Across the Spider-Verse"
      desc="Brrr, spiders..."
    />
  </section>
);

export default Movies;
