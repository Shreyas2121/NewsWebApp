import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);

  const setProgress1 = (progress) => {
    setprogress(progress);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/business">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/general">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/health">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>

          <Route exact path="/science">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>

          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>

          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
