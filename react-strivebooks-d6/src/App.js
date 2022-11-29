import "./App.css";
// import MyBadge from "./Components/MyBadge";
// import SingleBook from "./Components/SingleBook";
// import WarningSign from "./Components/WarningSign";
import history from "..//src/books/history.json";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selected: false,
    asin: null,
  };

  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col xs={8}>
            <BookList books={history} />
          </Col>
          <Col xs={4}>
            <CommentArea />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
