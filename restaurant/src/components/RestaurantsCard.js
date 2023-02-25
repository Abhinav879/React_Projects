import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RestaurantsCard(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={`restaurant/${props.item.id}`}>
      <Card className="my-3 p-3 rounded bg-dark text-center ">
        <Card.Img src={props.item.photograph} className="p-3 " />
        <Card.Body>
          <Card.Title>
            <h4>{props.item.name}</h4>
          </Card.Title>
          <Card.Text>
            <p>cuisine : {props.item.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            <p>Location : {props.item.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurantsCard;
