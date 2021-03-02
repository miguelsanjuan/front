import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns, Container, Row, Col
  } from 'reactstrap';
import config from '../../static/config';
import axios from 'axios';
import moment from 'moment';

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error:null, 
      carts: [], 
      response: {}, 
      isLoading: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    this.setState({isLoading: true});

    let userEmail = localStorage.getItem('userEmail');
  
     axios.get(config.apiUrl + config.apiPathCartGetAll + '/' + userEmail).then(response => response.data).then(
          (result)=>{
              this.setState({
                  carts:result, isLoading: false
              });
          },
          (error)=>{
              this.setState({error});
              console.error('$http:ajax:catch', error)
          }
      )
  }

  componentWillUnmount() {
    this.setState({isLoading: true});

    let userEmail = localStorage.getItem('userEmail');
  
    axios.get(config.apiUrl + config.apiPathCartGetAll + '/' + userEmail).then(response => response.data).then(
         (result)=>{
             this.setState({
                 carts:result, isLoading: false
             });
         },
         (error)=>{
             this.setState({error});
         }
     )
  
  }

  handleClick() {
    // event.preventDefault();
    let userEmail = localStorage.getItem('userEmail');
    let order = {
        userEmail: userEmail,
        orderTitle: 'Pedido '+moment().format('DD/MM/YYYY h:mm:ss'),
        orderDescription: "La vendedora realizara tu envio pronto",
        orderStatus: 'En proceso',
        seller: 'ana@sellnow.com'
      };

    axios({
        method: 'post',
        url: config.apiUrl + config.apiPathOrderPost,
        data: order
    })
    .then((response) => {
        console.log(response);
        this.props.history.push('/orders');
      }, (error) => {
        console.log(error);
      })
    // body: JSON.stringify(carts),
  }

  render() {
    const {carts, isLoading} = this.state;

    if (isLoading) {
      return <div className="loader"></div>;
    }
    const prodList = carts.map(prod => {
        return <Card>
          
            <Row>
              <Col>
                <CardImg top width="100%" src={prod.productURLPicture} alt={'Card image - '+prod.productName} />
              </Col>
              <Col>
               <CardBody>
                  <CardTitle tag="h5" className="text-info">{prod.productName}</CardTitle>
                  <CardText>{prod.productDescription}</CardText>
                </CardBody>
              </Col>
              <Col>
                <CardBody>
                  <CardTitle tag="h5" className="text-warning">Cantidad {prod.quantity}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-success">{'$ '+(prod.unitPrice * prod.quantity)}</CardSubtitle>
                </CardBody>
              </Col>
            </Row>
         
        </Card>
      });


    return (
      <div>
          <Container className="themed-container containerCard" fluid="md">
          {prodList}
          <br />
          <Button color="primary" onClick={this.handleClick}>Comprar</Button>
          </Container>
          
          
      </div>
    );
  }
}
