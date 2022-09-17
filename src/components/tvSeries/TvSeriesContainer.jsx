import React, { useState } from "react";
import dummyTvSeriesImg from "../../assets/images/img2.webp";
import { Row, Col, Container, Card } from "react-bootstrap";
import TvSeriesList from "./TvSeriesList";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/css/TvSeriesAndMovies.modules.css";

const TvSeriesContainer = () => {
  const [tvSeriesList, setTvSeriesList] = useState([
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
      type: "Tv Series",
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
      type: "Tv Series",
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
      type: "Tv Series",
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
      type: "Tv Series",
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
      type: "Tv Series",
    },
  ]);
  return (
    <Container className="my-5 overflow-hidden" id="tv-series">
      <h3 className="text-start text-white fw-bold mb-3">Tv Series</h3>
      <Row>
        {tvSeriesList.map((tv, index) => (
          <Col md={2} key={index}>
            <TvSeriesList
              tvSeriesImg={tv.tvSeriesImg}
              title={tv.title}
              year={tv.year}
            />
          </Col>
        ))}
        <Col md={2}>
          <Card className="rounded shadow border-0 bg-dark text-white d-flex justify-content-center align-items-center">
            <Link
              to="/series"
              className="text-decoration-none text-white see__more-link"
            >
              <p>
                See More <FaArrowAltCircleRight />
              </p>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TvSeriesContainer;
