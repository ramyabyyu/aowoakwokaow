import React from "react";
import { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import dummyMovieImg from "../assets/images/img2.webp";
import MovieList from "../components/movies/MovieList";
import { Col, Container, Row } from "react-bootstrap";

const Movies = () => {
  const [movieLists, setMovieLists] = useState([
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      movieImg: dummyMovieImg,
      title: "Money Heist",
      year: 2022,
    },
  ]);

  return (
    <div>
      <Jumbotron />
      <Container className="my-5 overflow-hidden">
        <h3 className="text-start text-white fw-bold mb-3">Movie</h3>
        <Row>
          {movieLists.map((movie, index) => (
            <Col md={2} key={index} className="mb-3">
              <MovieList
                movieImg={movie.movieImg}
                title={movie.title}
                year={movie.year}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
