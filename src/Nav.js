import React from "react";
import { Link } from "components/Router";
import { useSiteData } from "react-static";

import "./app.css";

function Nav() {
  const routeMap = useSiteData().routeMap;

  let itemList = [];
  for (const root in routeMap) {
    itemList.push(<Link to={"/" + root}>{root}</Link>);
    routeMap[root].forEach((child) => {
      itemList.push(<Link to={"/" + root + "/" + child}>{child}</Link>);
    });
  }

  return <nav>{itemList}</nav>;
}

export default Nav;
