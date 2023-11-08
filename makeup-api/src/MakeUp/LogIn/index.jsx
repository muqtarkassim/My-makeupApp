import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const imagesColumn1 = [
  "https://i.pinimg.com/564x/4e/25/61/4e2561480756041eb17a143f285f9d50.jpg",
  "https://i.pinimg.com/236x/d8/e7/90/d8e7904b237cc670ab83256e5b346a35.jpg",
  "https://i.pinimg.com/236x/75/5d/c7/755dc7c5976689e019d866ce04cc0ba6.jpg",
  "https://i.pinimg.com/236x/05/99/d9/0599d93dc118f4055b733e50eb4bf79a.jpg",
];

const imagesColumn2 = [
  "https://i.pinimg.com/564x/19/5b/f7/195bf7d533925a083266858d8c9fcf64.jpg",
  "https://i.pinimg.com/236x/dc/c2/9e/dcc29e4928aa686accdd3f753e73597b.jpg",
  "https://i.pinimg.com/236x/d7/54/c4/d754c44bf2be06828d2085e5d9d8f867.jpg",
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
          <button className="btn btn-primary" onClick={toLayout}>
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
