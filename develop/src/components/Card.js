import React from 'react';
import Card from 'react-bootstrap/Card';


function CardComponent(props) {

    return (
      <>
      {console.log("card props: " + props)}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.employees.name.first} {props.employees.name.last}</Card.Title>
          <Card.Img variant="top" src={props.employees.picture} />
          <Card.Subtitle className="mb-2 ">Email: {props.employees.email}</Card.Subtitle>
          <Card.Text>
            Phone Number: {props.employees.phone}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
  }
  
  
  export default CardComponent;