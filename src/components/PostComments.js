import React, { Component } from "react";
import { Button, Accordion, Card } from "react-bootstrap";

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
      
              {this.state.comments.map(comment=> <div>  <p key={comment.id }>{comment.name}</p></div>   )}
            
      </div>
    );
  }
}

export default PostComments;
