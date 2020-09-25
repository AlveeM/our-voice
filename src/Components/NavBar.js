import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useHistory, Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  anchorColorWhite: {
    color: 'white'
  },
  anchorColorBlack: {
    color: 'black'
  }
}));

export default function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    // history.push(pageURL);
    setAnchorEl(null);
  };

  // const handleButtonClick = pageURL => {
  //   history.push(pageURL);
  // };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Congress",
      pageURL: "/congress"
    },
    {
      menuTitle: "How to Vote",
      pageURL: "/how-to-vote"
    },
    {
      menuTitle: "Dashboard",
      pageURL: "/dashboard"
    },
    {
      menuTitle: "Sign In",
      pageURL: "/sign-in"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Our Voice
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
                className={classes.anchorColorBlack}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={menuTitle} onClick={() => handleMenuClick(pageURL)} >
                      <Link component={RouterLink} to={pageURL} className={classes.anchorColor} underline="none">
                        {menuTitle}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {menuItems.map(menuItem => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem
                    key={`${menuTitle}`}
                    variant="contained"
                    // onClick={() => handleButtonClick(pageURL)}
                    >
                      <Link component={RouterLink} to={pageURL} className={classes.anchorColorWhite} underline="none">
                        {menuTitle}
                      </Link>
                  </MenuItem>)
              })}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
