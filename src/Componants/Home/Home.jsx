import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Home() {
  return (
    <>
    
      <header className="mt-4">
        <div className="row">
          <div className="layer">
            <div className="col-12 hero-title text-justify">
              Hello 👋
              <br /> I'm Karim Magdy <br />A Front End Developer
              <br /> based in Giza, Egypt.
            </div>
            <ul className="d-flex list-unstyled mb-5 mt-5">
              <li className="px-3 btn social-btn btn-outline-secondary text-dark">
                <a
                  href="https://www.linkedin.com/in/karimagdy14/"
                  target="_balnk"
                >
                  LinkedIn
                </a>
              </li>

              <li className="px-3 btn social-btn btn-outline-secondary text-dark">
                <a href="https://github.com/KarimMagdy96" target="_balnk">
                  GitHub
                </a>
              </li>

              <li className="px-3 btn social-btn btn-outline-secondary text-dark">
                <a href="mailto:karimmagdy096@gmail.com" target="_balnk">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Row xs={1} md={2} className="g-5" id="mywork">
        <div className="w-100 fs-3 ">Work.</div>
        <Col>
          <Card className=" border-0">
            <a
              href="https://movek-flex.netlify.app/"
              target="_blank"
              className="img-hover-zoom rounded border border-1"
            >
              <Card.Img
                className="rounded"
                variant="top"
                src="../../../public/project1.png"
              />
            </a>
            <Card.Body>
              <Card.Title className="fs-2">Move & TvShows Site</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" border-0">
            <a
              href="https://movek-flex.netlify.app/"
              target="_blank"
              className="img-hover-zoom rounded border border-1"
            >
              <Card.Img
                className="rounded"
                variant="top"
                src="../../../public/project2.png"
              />
            </a>
            <Card.Body>
              <Card.Title className="fs-2">Move & TvShows Site</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" border-0">
            <a
              href="https://movek-flex.netlify.app/"
              target="_blank"
              className="img-hover-zoom rounded border border-1"
            >
              <Card.Img
                className="rounded"
                variant="top"
                src="../../../public/project3.png"
              />
            </a>
            <Card.Body>
              <Card.Title className="fs-2">Move & TvShows Site</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" border-0">
            <a
              href="https://movek-flex.netlify.app/"
              target="_blank"
              className="img-hover-zoom rounded border border-1"
            >
              <Card.Img
                className="rounded"
                variant="top"
                src="../../../public/project4.png"
              />
            </a>
            <Card.Body>
              <Card.Title className="fs-2">Move & TvShows Site</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="pt-5" id="about">
        <div className="w-100 fs-3 mb-3 mt-5">About. </div>
        <div className="w-75 d-none d-md-block fs-2">
          Creative Front-End Developer offering 1 year of experience providing
          high-impact web solutions for diverse industry organizations. Skilled
          in designing, developing, and testing multiple web-based applications
          incorporating a range of technologies. Aspiring to combine broad
          background with strong technical skills to excel as a Front-End
          Developer.
        </div>
        <div className="w-100 d-md-none fs-2">
          Creative Front-End Developer offering 1 year of experience providing
          high-impact web solutions for diverse industry organizations. Skilled
          in designing, developing, and testing multiple web-based applications
          incorporating a range of technologies. Aspiring to combine broad
          background with strong technical skills to excel as a Front-End
          Developer.
        </div>
      </div>
      <div className="pt-5">
        <div className="w-100 fs-3 mb-3 mt-5">Contact. </div>
        <div className="w-75 work-p">
          LET'S WORK <br /> TOGETHER
        </div>
        <a href="#" className="btn btn-dark text-white">
          Schedule a call
        </a>
        <ul className="d-flex list-unstyled mb-5 mt-5">
          <li className="px-3 btn social-btn btn-outline-secondary text-dark">
            <a href="https://www.linkedin.com/in/karimagdy14/" target="_balnk">
              LinkedIn
            </a>
          </li>

          <li className="px-3 btn social-btn btn-outline-secondary text-dark">
            <a href="https://github.com/KarimMagdy96" target="_balnk">
              GitHub
            </a>
          </li>

          <li className="px-3 btn social-btn btn-outline-secondary text-dark">
            <a href="mailto:karimmagdy096@gmail.com" target="_balnk">
              Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );

}