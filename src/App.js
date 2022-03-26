import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
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
      <NavBar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />

        {/* <Route path="/general">
          <News
            apiKey={apiKey}
            setProgress={setProgress1}
            key="general"
            pageSize={pageSize}
            country="in"
            category="general"
          />
        </Route> */}

        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress1}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
