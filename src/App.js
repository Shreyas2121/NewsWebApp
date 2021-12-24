import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends React.Component {
  pageSize = 9;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>

            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
