import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../assets/img/theme/carusel1.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../../assets/img/theme/carusel2.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                 Catálogos Virtuales Online
                </h1>
                <p className="lead text-white mt-4">
                 Trabajar en ventas por catálogo es como convertirte en el representante de ventas de
                 una marca. Tu trabajo consiste en conseguir clientes y vender los productos del catálogo. 
                 Tienes que conocer los productos y entender las necesidades y gustos de tus clientes, para
                 ofrecerles lo mejor.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="/catalog"
                >
                  Catalogo
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
