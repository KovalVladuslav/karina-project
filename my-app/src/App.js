import React from 'react'
import './styles/App.scss';

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardHeader from './components/CardHeader'
import CardMission from './components/CardMission'
import CardAboutUs from "./components/CardAboutUs"
import CardNeeds from "./components/CardNeeds"


function App() {
  return (
    <Container className={'container'}>
      <Row className={'m-0'}>
          <Col sm={12} className={'card'}>
              <CardHeader/>
          </Col>
          <Col sm={12} className={'card card_default'}>
              <CardMission/>
          </Col>
          <Col sm={12} className={' card card_default'}>
              <CardAboutUs/>
          </Col>
          <Col sm={12} className={' card card_default'}>
              <CardNeeds/>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
