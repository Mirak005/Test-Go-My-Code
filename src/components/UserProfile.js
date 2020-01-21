import React from "react";
import Post from "./Post";
import UserDescription from "./UserDescription";

function UserProfile({ user, posts, comments }) {
  return (
    <div>
      <UserDescription user={user} />

      <Post posts={posts} comments={comments} userName={user.name} />
    </div>
  );
}

export default UserProfile;
