import React from "react";

import { Jumbotron, Container, Badge } from "react-bootstrap";

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
            Phone Number : <Badge variant="secondary">{`${phone}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            E-mail : <Badge variant="secondary">{`${email}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Address :
            <Badge variant="secondary">{`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Company Name :<Badge variant="secondary">{`${company.name}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Website Link : <Badge variant="secondary">{`${website}`}</Badge>
          </h5>
        </Container>
      </Jumbotron>
      <div className="posts bg-light text-center container">
        {posts.map(post => (
          <div
            key={post.id}
            className="row-12 bg-dark text-white t"
            style={{ margin: "2rem", padding: "1rem" }}
          >  
          <div className="border border-ligh rounded">
            <h3 className="text-center text-dark post-name">{name[0]}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>
              {`${
                comments.filter(comment => comment.postId === post.id).length
              } comments`}
            </p>
            </div>
            {comments
              .filter(comment => comment.postId === post.id)
              .map(comment => (
                <div
                  key={comment.id}
                  className="row-12  rounded-pill bg-light text-dark text-left display-flex aling-items-column"
                  style={{ margin: "2rem" }}
                >
                  <h3 className="comment-name  text-decoration-underline text-monospace">
                    {comment.name}
                  </h3>
                  <p className="comment-email  text-muted">{comment.email}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
