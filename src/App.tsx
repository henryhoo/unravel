import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Router } from "./components/Router";
import Nav from "./components/Nav";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

const rootTheme = createMuiTheme({});

function App() {
  return (
    <Root>
      <ThemeProvider theme={rootTheme}>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Nav></Nav>
        </React.Suspense>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <div className="footer"> copyright 2020. All rights resevered</div>
      </ThemeProvider>
    </Root>
  );
}

export default App;
