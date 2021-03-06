import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

function SearchResults(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="info"
        brand="Shaun Was Here"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h3 style={{ marginTop: "2rem", fontWeight: "bold" }}>
                      FIND AN ACTOR
                    </h3>
                    <div className={classes.socialLine}>
                      <div style={{ textAlign: "center" }}>
                        <h6></h6>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Search Actor..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Last Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Height"
                      id="height"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "height",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon className={classes.inputIconsColor}>
                        //       lock_outline
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Weight"
                      id="weight"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "weight",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon position="end">
                        //       <LockOpen className={classes.inputIconsColor} />
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Chest"
                      id="chest"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "chest",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon position="end">
                        //       <LockOpen className={classes.inputIconsColor} />
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Waist"
                      id="waist"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "waist",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon position="end">
                        //       <LockOpen className={classes.inputIconsColor} />
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                      }}
                    />
                    <div style={{ textAlign: "center" }}>
                      <Button justify="center" type="button" color="info">
                        Find Actor
                      </Button>
                    </div>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="info" simple>
                      Find Actor
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
export default SearchResults;