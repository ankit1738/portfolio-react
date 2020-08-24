import React, { Fragment, useState } from "react";
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

function Header() {
    const classes = styles();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => {
        setOpen((current) => !current);
    };
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            Ankit Kumar
                        </Typography>
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
                            </div>
                        ) : (
                            <Fragment>
                                <Button onClick={toggleDrawer}>Ham</Button>
                                <Drawer
                                    anchor="right"
                                    open={open}
                                    onClose={toggleDrawer}
                                    onClick={toggleDrawer}>
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
