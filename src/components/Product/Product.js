import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import{FaShoppingCart} from 'react-icons/fa'
import './Product.css'
const Product = (props) => {
  const { id, img, name, newPrice, category } = props.product;
  console.log(props.product);
  return (
    <>
      <Col sm={4}>
        <Card className="h-100 p-2">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            
              {/* {category.map(item => <p>{item},</p>)} */}
           
            <Card.Subtitle>Price: ${newPrice}</Card.Subtitle>
          </Card.Body>

          <Card.Body className="position-relative">
              <Button className="btn btn-md btn-secondary w-100 position-absolute bottom-0 start-0">Add to Cart <FaShoppingCart className="ms-1"></FaShoppingCart> </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;