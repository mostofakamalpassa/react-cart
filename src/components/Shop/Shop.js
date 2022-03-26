import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from '../Product/Product';
const Shop = () => {
    // set shopping data 
    const [products, setProducts] = useState([]);

    // use effet  for fetch data json files 
    
    useEffect(()=>{
        fetch('data.json')
        .then(data => data.json())
        .then(data => setProducts(data));
    } , [])




  return (


    <>
      <Container>
        <Row className="mt-5">
          <Col sm={8}>

              
              <Row className="row-cols-1 row-cols-md-3 g-4">
                  {/* dyname data go hear */}
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }
                 
              </Row>
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>
     
      </Container>
    </>
  );
};

export default Shop;
