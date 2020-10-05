import React from "react";
import MarkdownNavbar from "markdown-navbar";

const mdPages = require("react-static-plugin-md-pages");

const article = `# Markdown-Navbar Demo

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.`;


export default ({ children }) => {
  const pageData = mdPages.useMarkdownPage()
  console.log(pageData)
  console.log(children)
  return (
    <div>
      {/* {children} */}
      <MarkdownNavbar source = {article}/>
    </div>
  );
};
