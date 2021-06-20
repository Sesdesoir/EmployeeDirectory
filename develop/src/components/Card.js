import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CardComponent(props) {

    return (
      <>
      {console.log("card props: " + props)}
      <Col>
      <Card style={{ width: '18rem', background: "linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080)" }}>
        <Card.Body>
          <Card.Title>{props.employees.name.first} {props.employees.name.last}</Card.Title>
          <Card.Img variant="top" src={props.employees.picture.medium} />
          <Card.Subtitle className="mb-2 ">Email: {props.employees.email}</Card.Subtitle>
          <Card.Text>
            Phone Number: {props.employees.phone} 
          </Card.Text>
          <Card.Text>location: {props.employees.location.city} {props.employees.location.state}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </>
    );
  }
  
  
  export default CardComponent;