import { Button, Card, Container } from "react-bootstrap";
import "./projectCard.css";
import { Link } from "react-router-dom";
export default function ProjectCard(props) {
  return (
    <>
      <Container className="individualCard">
        <Card>
          <Card.Img variant="top" src={props.imageLink} className="img" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.details}</Card.Text>
            <Link to={`/project/${props.id}`} target="_blank">
              <Button variant="outline-primary">Read More..</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
