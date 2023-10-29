import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from '/Page'; // Import your Page component
import Home from '/home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className = "content">
          <Switch>
            <Route path = "/" element = {<Home />}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    // <Router>
    //     <Page />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </Router>
  );
}

export default App;
