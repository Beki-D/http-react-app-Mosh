import React, { Component } from "react";
import axios from "axios";
import "./App.css";


class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
  }

  handleAdd = async () => {
    console.log("Add");
  };

  handleUpdate = async post => {
    console.log("Update", post);
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
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
