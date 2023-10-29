routes.js
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import search from ".app/search";
import ResultsPage from ".app/resultsPage";
import Page from "./Page";
import React from 'react';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SearchResults from 'pages/searchResults'; // Import your SearchResults component

function Routes() {
  const rootElement = document.getElementById("root");
  const root = createRoot (rootElement);

  root.render(
    <BrowsRouter>
      <Page />
      <App />
    </BrowsRouter>
  )
  return (
    <BrowserRouter>
    <Page />
    <ResultsPage />
    <Routes>
        <Route path="/" element={<Page />}>
          <Route index element = {<Page />} />
          <Route path = "resultsPage" element = {<ResultsPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Routes;
