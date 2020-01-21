import React from "react";
import axios from "axios";
import AppNavbar from "./components/AppNavbar";
import ContactCard from "./components/ContactCard";
import UserProfile from "./components/UserProfile";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: [],
    isGrid:true
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

  gridListHandler=(value)=>{
    this.setState({isGrid:value})
  }

  render() {
    return (
      <div>
        <AppNavbar gridListHandler={this.gridListHandler} />
        <Route
          exact
          path="/"
          render={() => (
            <div className={this.state.isGrid?"contact-grid":"contact-list"}>
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
              <UserProfile
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
