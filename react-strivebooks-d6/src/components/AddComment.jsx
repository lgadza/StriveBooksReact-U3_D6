import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AdComment extends React.Component {
  state = {
    commentObj: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentObj),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2Njk2NDczMDMsImV4cCI6MTY3MDg1NjkwM30.3_qGZ4Qlwj0qDOExobtNUl1yldy4B0rTcxWJOsuvydc",
          },
        }
      );
      if (response.ok) {
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="mb-5">
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Write Your Comment Here </Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.commentObj.comment}
              onChange={(e) =>
                this.setState({
                  commentObj: {
                    ...this.state.commentObj,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate The Book</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                this.setState({
                  commentObj: {
                    ...this.state.commentObj,
                    comment: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Post Comment
          </Button>
        </Form>
      </div>
    );
  }
}

export default AdComment;
