import React from "react";
import Card from "react-bootstrap/Card";
// import fantasy from "../Data/fantasy.json";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";
import { Col } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col xs={4} md={3}>
          <Card
            onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ border: this.state.selected ? "3px solid red" : "none" }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.category}</Card.Text>
              <Button variant="primary">{this.props.book.price}</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* {this.state.selected && (
          <Col xs={4} md={3}>
            <CommentArea asin={this.props.book.asin} />
          </Col>
        )} */}
      </>
    );
  }
}

export default SingleBook;
