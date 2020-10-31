import React from "react";
import NestedMenu from "./NestedMenu";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const mdPages = require("react-static-plugin-md-pages");

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: "fixed",
    top: "5%",
    right: 0,
    backgroundColor: "transparent",
    borderLeft: 0,
    color: theme.palette.primary.main,
  },
  contentCard: {},
}));

export default ({ children }) => {
  const classes = useStyles();
  const pageData = mdPages.useMarkdownPage();
  const pagePath = "/" + pageData.path;

  const headings = pageData["headings"].filter((heading) => heading.depth > 1);

  const getMenuItems = (headings, depth) => {
    if (headings.length === 0 || depth > 6) {
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
    rootIndexs.forEach((rootIndex, i) => {
      const rootHeading = headings[rootIndex];
      const childrenStart = rootIndex + 1;
      const childrenEnd = rootIndexs[i + 1];
      const childrenHeadings = headings.slice(childrenStart, childrenEnd);
      items.push({
        name: rootHeading.value,
        link: pagePath + "#" + rootHeading.slug,
        nestedItems: getMenuItems(childrenHeadings, depth + 1),
      });
    });

    return items;
  };

  const getItemComponent = (item) => {
    const { name } = item;
    return (
      <Typography variant="body1" color="textSecondary">
        {name}
      </Typography>
    );
  };

  const pageNavigation = (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{
        paper: classes.drawer,
      }}
    >
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5">Contents</Typography>
        <NestedMenu
          items={getMenuItems(headings, 2)}
          getItemComponent={getItemComponent}
          key="page-nav"
        ></NestedMenu>
      </Card>
    </Drawer>
  );

  // handle scoll based on anchor
  const currlURL = window.location.href;
  useEffect(() => {
    const urlParts = currlURL.split("#");
    if (urlParts.length > 1) {
      const anchor = urlParts[urlParts.length - 1];
      window.scrollTo(0, document.getElementById(anchor).offsetTop);
    }
  }, [currlURL]);

  return (
    <main>
      {children}
      {pageNavigation}
    </main>
  );
};
