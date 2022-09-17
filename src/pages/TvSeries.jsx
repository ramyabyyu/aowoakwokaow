import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import TvSeriesList from "../components/tvSeries/TvSeriesList";
import dummyTvSeriesImg from "../assets/images/img2.webp";

const Series = () => {
  const [tvSeriesList, setTvSeriesList] = useState([
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Money Heist",
      year: 2022,
    },
  ]);
  return (
    <div>
      <Jumbotron />
      <Container className="my-5 overflow-hidden">
        <h3 className="text-start text-white fw-bold mb-3">Tv Series</h3>
        <Row>
          {tvSeriesList.map((tv, index) => (
            <Col md={2} key={index} className="mb-3">
              <TvSeriesList
                tvSeriesImg={tv.tvSeriesImg}
                title={tv.title}
                year={tv.year}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Series;
