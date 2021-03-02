import React, { Component } from 'react';
import '../App.css';
import CardsFooter from '../components/home/CardsFooter.js';
import Carousel from '../components/home/Carousel'
import Download from '../components/home/Download'
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <br />
        <Download />
        <br />
      </div>
    );
  }
}

export default Home;