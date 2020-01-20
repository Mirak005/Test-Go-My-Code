import React from "react";
import PostComments from "./PostComments";
import {
  Jumbotron,
  Container,
  Badge,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

function UserPosts({
  user: { name, email, phone, website, company, address },
  posts,
  comments
}) {
  return (
    <div>
      <Jumbotron fluid>
        <Container className="posts-profile-user">
          <h2
            className="card-first-name text-white text-center"
            style={{ margin: "auto" }}
          >
            {name[0]}
          </h2>
          <h2 className="text-justify-left">{name}</h2>
          <h5 className="text-justify-left">
            Phone Number : <Badge variant="secondary">{`  ${phone}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            E-mail : <Badge variant="secondary">{`  ${email}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Address :
            <Badge variant="secondary">{`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Company Name :
            <Badge variant="secondary">{`${company.name}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Website Link : <Badge variant="secondary">{`${website}`}</Badge>
          </h5>
        </Container>
      </Jumbotron>
      <div className="posts bg-primary text-center container">
        {posts.map(post => (
          <div key={post.id} className="row bg-dark text-white">
            <h3>this is a post title:{post.title}</h3>
            <p>this is a post body:{post.body}</p>
        <p>{comments.filter(comment => comment.postId === post.id).length} comments</p>
            {comments
              .filter(comment => comment.postId === post.id)
              .map(comment => (<div className="row bg-light text-dark text-left">
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
