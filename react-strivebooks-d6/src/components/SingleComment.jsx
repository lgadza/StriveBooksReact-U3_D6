import { ListGroup, Button } from "react-bootstrap/";
import { format } from "date-fns";

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {format(new Date().getFullYear(comment.createdAt), "MM.dd.yyyy")}:{"   "}
    {comment.comment}
    <hr />
    <Button variant="primary" type="submit">
      Delete
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
