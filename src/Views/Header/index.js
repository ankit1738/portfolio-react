import React, { Fragment, useState, useContext } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link,
    Container,
    Drawer,
} from "@material-ui/core";
import styles from "./styles";
import { useHistory } from "react-router-dom";
import { RoleContext } from "../../RoleContext";
import firebase from "../../firebase";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
function Header() {
    const classes = styles();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const { role, setRole } = useContext(RoleContext);

    const toggleDrawer = (state) => {
        setIsOpen((current) => !current);
    };

    const handleAdminAccess = () => {
        history.push("/adminLogin");
    };

    const handleLogout = () => {
        firebase.auth
            .signOut()
            .then(function () {
                console.log("Sign-out successful.");
            })
            .catch(function (error) {
                console.log("An error happened.");
            });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.left}>
                            <Typography variant="h6" className={classes.title}>
                                Ankit Kumar
                            </Typography>
                        </div>
                        {window.innerWidth > 600 ? (
                            <div className={classes.right}>
                                <Link underline="none" href="#education">
                                    Education
                                </Link>
                                <Link underline="none" href="#experience">
                                    Experience
                                </Link>
                                <Link underline="none" href="#skills">
                                    Skills
                                </Link>
                                <Link underline="none" href="#projects">
                                    Projects
                                </Link>
                                <Link underline="none" href="#contact">
                                    Contact
                                </Link>
                                {role === "admin" ? (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleLogout}
                                        className={classes.adminButton}>
                                        Logout
                                    </Button>
                                ) : (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleAdminAccess}
                                        className={classes.adminButton}>
                                        Admin
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <Fragment>
                                <Button onClick={toggleDrawer}>
                                    <MenuIcon
                                        style={{ fontSize: 25 }}
                                        className={classes.ham}
                                    />
                                </Button>
                                <Drawer
                                    className={classes.drawer}
                                    anchor="right"
                                    open={isOpen}
                                    onClose={toggleDrawer}
                                    onClick={toggleDrawer}>
                                    {/* <p>
                                        <CloseIcon styles={{ fontSize: 25 }} />
                                    </p> */}
                                    {/* <div
                                        onClick={toggleDrawer}
                                        role="presentation"> */}
                                    <Link underline="none" href="#education">
                                        Education
                                    </Link>
                                    <Link underline="none" href="#experience">
                                        Experience
                                    </Link>
                                    <Link underline="none" href="#skills">
                                        Skills
                                    </Link>
                                    <Link underline="none" href="#projects">
                                        Projects
                                    </Link>
                                    <Link underline="none" href="#contact">
                                        Contact
                                    </Link>
                                    {role === "admin" ? (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={handleLogout}
                                            className={classes.adminButton}>
                                            Logout
                                        </Button>
                                    ) : (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={handleAdminAccess}
                                            className={classes.adminButton}>
                                            Admin
                                        </Button>
                                    )}
                                    {/* </div> */}
                                </Drawer>
                            </Fragment>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
