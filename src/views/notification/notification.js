import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns, Container, Row, Col
  } from 'reactstrap';
import config from '../../static/config';
import axios from 'axios';
import moment from 'moment';

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error:null, 
      notifications: [], 
      response: {}, 
      isLoading: true
    };
  }
  
  componentDidMount(){
    this.setState({isLoading: true});

    let userEmail = localStorage.getItem('userEmail');
  
     axios.get(config.apiUrl + config.apiPathNotificationGetAll ).then(response => response.data).then(
          (result)=>{
              this.setState({
                  notifications:result, isLoading: false
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
  
    axios.get(config.apiUrl + config.apiPathNotificationGetAll ).then(response => response.data).then(
         (result)=>{
             this.setState({
                 notifications:result, isLoading: false
             });
         },
         (error)=>{
             this.setState({error});
         }
     )
  
  }

  render() {
    const {notifications, isLoading} = this.state;

    if (isLoading) {
      return <div className="loader"></div>;
    }
    const notificationList = notifications.map(not => {
        return <Card>
          
            <Row>
              <Col>
               <CardBody>
                  <CardTitle tag="h6" className="text-info">{not.notificationTitle}</CardTitle>
                  <CardSubtitle tag="h5" className="mb-2 ">{not.notificationDescription}</CardSubtitle>
                </CardBody>
              </Col>
            </Row>
         
        </Card>
      });


    return (
      <div>
          <Container className="themed-container containerCard" fluid="md">
          {notificationList }
          </Container>
      </div>
    );
  }
}
