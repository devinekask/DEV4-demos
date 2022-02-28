import React from "react";

// (un)comment the following line to see the difference
import "./movie.css";

const Movie = ({ title, desc }) => (
  <article>
    <h3 className="title">{title}</h3>
    <p>{desc}</p>
  </article>
);

export default Movie;
