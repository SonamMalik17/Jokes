import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutText = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>About Joke Website</h2>
          <p>
            This website is dedicated to bringing joy and laughter to its visitors through a collection of funny jokes.
            Our mission is to spread happiness and brighten your day with humor.
          </p>
          <p>
            The jokes displayed on this website are fetched from a Joke API, ensuring fresh and entertaining content with every visit.
          </p>
          <p>
            We hope you enjoy your time here and leave with a smile on your face!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutText