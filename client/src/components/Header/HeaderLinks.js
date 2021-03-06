/*eslint-disable*/
import React, { useContext } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import AuthContext, { AuthProvider } from "views/AuthProvider/authprovider.js";
import firebase from 'firebase/app';
import 'firebase/auth';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


function HeaderLinks() {
  const auth = useContext(AuthContext);
  const {
    user,
    methods
  } = auth;

  const {
    signOut
  } = methods;

  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("HandleSignout Called")
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        console.log("No User Found, redirecting to route")

        window.location.href = '/';
      }
    });
    console.log("calling signOut")
    signOut(); 
  }

  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Button 
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          <Link to="/add-actor" className={classes.dropdownLink}>
              Add an Actor
          </Link>
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button 
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          <Link to="/search-page" className={classes.dropdownLink}>
              Search
          </Link>
          </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button 
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          <Link to="#" className={classes.dropdownLink} onClick={handleSignOut}>
              Logout
          </Link>
          </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
      {user ? 
        (
          <Button 
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          <Link to="#" className={classes.dropdownLink} onClick={handleSignOut}>
             Logout 
          </Link>
         </Button>) : (
          <Button 
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          <Link to="/" className={classes.dropdownLink}>
              Login
          </Link>
          </Button>)}
</ListItem>
    </List>
  );
}
export default HeaderLinks;