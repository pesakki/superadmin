import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ToolBarWrapper from "./ToolBarWrapper";
import DrawerWrapper from './sideBar';

const title = "Dashboard";
const userName = "Admin";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: `calc(100%)`,
    },
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down("xs")]: {
      marginRight: 10,
    },
  },
  menuButtonShift: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    toolbar: theme.mixins.toolbar,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: drawerWidth + 60,
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(9) + 1,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  drawerAvatar: {
    width: "75px",
    height: "75px",
  },
  appBarTitle: {
    flexGrow: 1,
  },
  removeTBPadding: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  removeLRPadding: {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  drawerFooterOpen: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  drawerFooterClosed: {
    display: "none",
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
        "&:after": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
        "&:hover:not($disabled):before": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
      },
    },
    MuiButton: {
      textPrimary: {
        color: `${theme.palette.error.main}!important`,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        "&$checked": {
          color: `${theme.palette.secondary.main}!important`,
        },
      },
    },
    MUIDataTableSelectCell: {
      checkboxRoot: {
        "&$checked": {
          color: `${theme.palette.secondary.main}`,
        },
      },
    },
    MUIDataTableToolbar: {
      icon: {
        "&:hover": {
          color: `${theme.palette.secondary.main}`,
        },
      },
      iconActive: {
        color: `${theme.palette.secondary.main}`,
      },
    },
    MUIDataTableBodyCell: {
      root: {
        height: 48,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        position: "relative",
        maxWidth: 0,
      },
    },
    MuiTableCell: {
      root: {
        "&:nth-last-child(1)": {
          paddingRight: "3.5rem",
          textOverflow: "inherit",
        },
      },
    },
  },
}));


const Layout = (props) => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = () => {
    setDrawerState(!drawerState);
  };

  console.log("layout props", props);

  return (
    <Fragment>
      <ToolBarWrapper
        title={title}
        darkState={props.darkMode}
        drawerState={drawerState}
        handleDrawerState={handleDrawerState}
        handleThemeChange={props.themeHandler}
        classes={classes}
        handleLogout={props.handleLogout}
      />
      <DrawerWrapper
        appName={userName}
        drawerState={drawerState}
        handleDrawerState={handleDrawerState}
        classes={classes}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerState,
        })}
      >
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;