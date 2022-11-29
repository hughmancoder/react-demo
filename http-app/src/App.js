import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
  state = {
    posts: []
  };

  // life cycle hook to process post rendering component
  async componentDidMount() {
    // creating a http request and get a promise
    const { data : posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  // this is a property which we are setting to a function
  handleAdd = async() => {
    const obj = { title: 'a', body: 'b'};
    const { data: post } = await axios.post(apiEndpoint, obj);
    // append to start of array
    // const posts = this.state.posts;
    // posts.unshift(post);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = post => {
    console.log("Update", post);
  };

  handleDelete = post => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
