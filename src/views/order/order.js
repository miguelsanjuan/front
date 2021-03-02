import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns, Container, Row, Col
  } from 'reactstrap';
import config from '../../static/config';
import axios from 'axios';
import moment from 'moment';

export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error:null, 
      orders: [], 
      response: {}, 
      isLoading: true
    };
  }
  
  componentDidMount(){
    this.setState({isLoading: true});

    let userEmail = localStorage.getItem('userEmail');
  
     axios.get(config.apiUrl + config.apiPathOrderGetAll ).then(response => response.data).then(
          (result)=>{
              this.setState({
                  orders:result, isLoading: false
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
  
    axios.get(config.apiUrl + config.apiPathOrderGetAll ).then(response => response.data).then(
         (result)=>{
             this.setState({
                 orders:result, isLoading: false
             });
         },
         (error)=>{
             this.setState({error});
         }
     )
  
  }

  render() {
    const {orders, isLoading} = this.state;

    if (isLoading) {
      return <div className="loader"></div>;
    }
    const ordeList = orders.map(prod => {
        return <Card>
          
            <Row>
              <Col>
               <CardBody>
                  <CardTitle tag="h5" className="text-info">{prod.orderTitle}</CardTitle>
                  <CardSubtitle tag="h5" className="mb-2 ">{prod.orderDescription}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-warning">{prod.orderStatus}</CardSubtitle>
                </CardBody>
              </Col>
            </Row>
         
        </Card>
      });


    return (
      <div>
          <Container className="themed-container containerCard" fluid="md">
          {ordeList }
          </Container>
      </div>
    );
  }
}
