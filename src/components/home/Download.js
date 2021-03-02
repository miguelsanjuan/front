import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                   Las Mejores Marcas de {" "}
                  <span className="text-success">
                   Venta Por Catálogo en México
                  </span>
                </h2>
                <p className="lead">
                 En México existen una gran variedad de marcas de venta por catálogo.
                 Los productos más populares son: el calzado y la ropa. Pero también hay un gran
                 mercado en la venta por catálogo de cosméticos, maquillaje y productos para el hogar.
                 Dependiendo de la cantidad de clientes regulares que tengas, te va a convenir trabajar
                 con más o con menos catálogos.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
