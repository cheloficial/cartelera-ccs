import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import Movie from "./views/Movie";
import Search from "./views/Search";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/signin" Component={SignIn} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/movies" Component={Movie} />
          <Route exact path="/search" Component={Search} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;

