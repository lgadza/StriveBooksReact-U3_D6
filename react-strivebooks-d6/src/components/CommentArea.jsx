import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
  state = {
    comments: [], // empty array variable to receive the array of comments from the API
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2Njk2NDczMDMsImV4cCI6MTY3MDg1NjkwM30.3_qGZ4Qlwj0qDOExobtNUl1yldy4B0rTcxWJOsuvydc",
          },
        }
      );
      let data = await response.json();
      console.log("Data", data);
      this.setState({ comments: data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="Comments-area">
        <AddComment asin={this.props.asin} />
        <CommentList commentsProps={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
