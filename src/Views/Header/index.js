import React, { Fragment } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link,
    Container,
} from "@material-ui/core";
import styles from "./styles";

function Header() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            Ankit Kumar
                        </Typography>
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
                            <Link underline="none" href="#">
                                Projects
                            </Link>
                            <Link underline="none" href="#">
                                Contact
                            </Link>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
