import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const imagesColumn1 = [
  "https://i.pinimg.com/564x/a6/56/97/a6569716dcd6f22b27a4d3df74fb0e96.jpg",
  
  
];

const imagesColumn2 = [
  "https://i.pinimg.com/236x/14/07/54/140754871ea46589e7fc91245715d1c3.jpg",
 
];

const Login = () => {
  const navigate = useNavigate();
  const toLayout = () => {
    navigate("layout");
  };

  

  return (
    <div>
        <div className="card-header">
          <h1>LOGIN</h1>
          <button className="btn btn-dark btn-lg" onClick={toLayout}>
            HOME
          </button>
        </div>
        <div className="card-body">
        <Container fluid>
        <Row>
          {/* First Column */}
          <Col md={6}>

              {imagesColumn1.map((imageUrl, index) => (
                <Card key={index}>
                  <Card.Img variant="top" src={imageUrl} />
                 </Card>
              ))}
          </Col>
          {/* Second Column */}
          <Col md={6}>
        
              {imagesColumn2.map((imageUrl, index) => (
                <Card key={index}>
                  <Card.Img variant="top" src={imageUrl} />
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Login;
