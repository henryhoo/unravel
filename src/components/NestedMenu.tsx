import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import { navigate } from "./Router";

export type NestedMenuItemType = {
  name: string;
  link: string;
  Icon?: React.ElementType;
  nestedItems: NestedMenuItemType[];
};

export type NestedMenuPropsType = {
  items: NestedMenuItemType[];
  getItemComponent?: (item: NestedMenuItemType) => React.ReactElement;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    menuItem: {},
    menuItemIcon: {},
  })
);

function NestedMenu(props: NestedMenuPropsType) {
  const { items = [], getItemComponent } = props;
  const classes = useStyles();
  const [openIndex, setOpenIndex] = React.useState(-1);

  const defaultItemComponent = (item: NestedMenuItemType) => {
    const { name, Icon } = item;
    return (
      <>
        {!!Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
      </>
    );
  };

  const MenuItems = items.map((item, index) => {
    const { link, nestedItems } = item;
    const isExpandable = nestedItems && nestedItems.length > 0;
    const isFocused = openIndex === index;
    function handleClick() {
      setOpenIndex(index);
      navigate(link);
    }

    const ItemRoot = (
      <ListItem button className={classes.menuItem} onClick={handleClick}>
        {getItemComponent ? getItemComponent(item) : defaultItemComponent(item)}
        {isExpandable && !isFocused && <IconExpandMore />}
        {isExpandable && isFocused && <IconExpandLess />}
      </ListItem>
    );

    const ItemChildren = isExpandable ? (
      <Collapse in={isFocused} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <NestedMenu items={nestedItems} getItemComponent={getItemComponent} />
        </List>
      </Collapse>
    ) : null;
    return (
      <div key={link}>
        {ItemRoot}
        {ItemChildren}
      </div>
    );
  });

  return (
    <List component="nav" className={classes.root} disablePadding>
      {MenuItems}
    </List>
  );
}

export default NestedMenu;
