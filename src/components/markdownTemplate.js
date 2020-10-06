import React from "react";

const mdPages = require("react-static-plugin-md-pages");
import AppMenuItem from "./AppMenuItem";

export default ({ children }) => {
  const pageData = mdPages.useMarkdownPage();
  const pagePath = "/" + pageData.path;

  const headings = pageData["headings"].filter((heading) => heading.depth > 1);

  const getMenuItems = (headings, depth) => {
    if (headings.length === 0 || depth >6) {
      return [];
    }
    const rootIndexs = [];
    headings.forEach((heading, index) => {
      if (heading.depth === depth) {
        rootIndexs.push(index);
      }
    });

    if (rootIndexs.length === 0) {
      return getMenuItems(headings, depth + 1);
    }

    const items = [];
    rootIndexs.forEach((index, i) => {
      const rootHeading = headings[index];
      const childrenHeadings = headings.slice(
        Math.min(index + 1, headings.length),
        i < rootIndexs.length ? rootIndexs[i + 1] + 1 : headings.length + 1
      );
      items.push({
        name: rootHeading.value,
        link: pagePath + "#" + rootHeading.slug,
        nestedItems: getMenuItems(childrenHeadings, depth + 1),
      });
    });

    return items;
  };
  return (
    <main>
      <AppMenuItem items={getMenuItems(headings, 2)}> </AppMenuItem>
      {children}
    </main>
  );
};
