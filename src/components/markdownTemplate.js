import React from "react";

const mdPages = require("react-static-plugin-md-pages");
// const pageData = mdPages.useMarkdownTree()
// console.log(pageData)
// console.log(children)

export default ({ children }) => (
    <main>
      {children}
    </main>
  );