import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";

class PostComments extends Component {
  state = {
    isOpen: false,
    comments: this.props.comments.filter(
      comment => comment.postId === this.props.post.id
    )
  };
  setOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <div key={comment.id}>
            {/* <h2>{comment.name}</h2> */}
            <h2>{comment.email}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default PostComments;

{
  /* <div key={comment.id}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h3> this is a comment:{comment.name}</h3>{" "}
                    <p>{comment.name}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div> */
}
