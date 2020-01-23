import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import PhotoWall from "./components/PhotoWall";
import AddPhoto from "./components/AddPhoto";
import Single from "./components/Single";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div className="App">
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/single/:id"
          render={params => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default App;
