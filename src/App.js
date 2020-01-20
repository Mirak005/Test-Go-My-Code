import React from "react";
import axios from "axios";
import AppNavbar from "./components/AppNavbar";
import ContactCard from "./components/ContactCard";
import UserPosts from "./components/UserPosts";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: []
  };

  getComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
      this.setState({ comments: res.data });
      console.log(res.data);
    });
  };

  getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ users: res.data });
      console.log(res.data);
    });
  };

  getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
      console.log(res.data);
    });
  };
  componentDidMount = () => {
    this.getUsers();
    this.getPosts();
    this.getComments();
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Route
          exact
          path="/"
          render={() => (
            <div className="contact-list">
              {this.state.users.map(user => (
                <ContactCard key={user.id} user={user} />
              ))}
            </div>
          )}
        />
        {this.state.users.map(user => (
          <Route
            key={user.id}
            path={`/${user.id}`}
            render={() => (
              <UserPosts
                key={user.id}
                user={user}
                posts={this.state.posts.filter(post => user.id === post.userId)}
                comments={this.state.comments}
              />
            )}
          />
        ))}
      </div>
    );
  }
}

export default App;
