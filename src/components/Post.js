import React from "react";
import Comments from "./Comments";
import { Button } from "reactstrap";

function Post({ comments, posts, userName }) {
  return (
    <div className="posts bg-light text-center container">
      {posts.map(post => (
        <div
          key={post.id}
          className="row-12 bg-dark text-white t"
          style={{ margin: "2rem", padding: "1rem" }}
        >
          <div className="border border-ligh rounded">
            <h3 className="text-center text-dark post-name">{userName[0]}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Button
              color="primary"
              id={post.title
                .split("")
                .filter(x => x !== " ")
                .join("")}
              style={{ marginBottom: "1rem" }}
            >
              {`${
                comments.filter(comment => comment.postId === post.id).length
              } Comments`}
            </Button>
          </div>
          <Comments comments={comments} post={post} />
        </div>
      ))}
    </div>
  );
}

export default Post;
