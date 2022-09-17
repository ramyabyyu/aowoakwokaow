import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import dummyDetailImg from "../assets/images/img2.webp";
import detailImg from "../assets/images/detail.jpg";
import "../assets/css/Detail.modules.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const [isLogin, setIsLogin] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (user) setIsLogin(true);
    else {
      setIsLogin(false);
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/NVmD9iaNs6M?controls=0"
          title="Penyu Madura"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card
              className="rounded border-0 shadow bg-dark text-white p-2"
              style={{ width: "500px" }}
            >
              <Card.Body className="d-flex">
                <div className="me-5">
                  <img src={dummyDetailImg} alt="dummy img" width={160} />
                </div>
                <div>
                  {/* Header */}
                  <div>
                    <h3>Money Heist</h3>
                    <div className="d-flex align-items-center mt-4">
                      <p className="m-0 p-0 text-muted">2017</p>
                      <span className="px-2 ms-3 border border-secondary text-muted rounded">
                        Tv Series
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto nostrum exercitationem natus hic earum veritatis?
                    Error, ratione fugiat? Aspernatur consequuntur iusto nulla
                    sint, ratione quibusdam sapiente ipsa dicta eos. Error odio
                    aperiam eligendi
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded shadow border-0 bg-dark text-white position-relative">
              <img
                src={detailImg}
                alt="detail img"
                width={500}
                className="rounded episode__img"
              />
              <div className="position-absolute episode__img-overlay">
                <h5 className="fw-bold">In play now</h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
