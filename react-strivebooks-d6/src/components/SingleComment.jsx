import { ListGroup, Button } from "react-bootstrap/";
import { format } from "date-fns";

const SingleComment = ({ comment }) => {
  console.log(comment.updatedAt);
  return (
    <ListGroup.Item>
      {comment.updatedAt}
      {format(new Date().getFullYear(comment.updatedAt), "MM.dd.yyyy")}:{"   "}
      {comment.comment}
      <hr />
      <Button variant="primary" type="submit">
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
