import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container fluid className="mx-0 px-0 ">
        <Container fluid className="mx-0 mb-5 px-0 myNav">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Louis Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">My Books</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
          <Row>
            {this.props.books
              .filter((element) =>
                element.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((element) => (
                <Col xs={4} md={3}>
                  <SingleBook book={element} />
                </Col>
              ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default BookList;
