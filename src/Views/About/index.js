import React, { Fragment } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import { useStyles as styles, StyledTypography as Typography } from "./styles";

function About() {
    const classes = styles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2}>
                    <Typography variant="h4" className={classes.heading}>
                        About
                    </Typography>
                </Grid>
                <Grid item lg={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container className={classes.aboutGrid} spacing={10}>
                    <Grid item lg={5}>
                        <img className={classes.avatar} />
                    </Grid>
                    <Grid item lg={7}>
                        <Typography variant="h3">Ankit Kumar</Typography>
                        <Typography variant="body1">
                            Javascript Full stack developer proficient in MEAN
                            and MERN stack developement. Experienced in
                            end-to-end developement phase of an application.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default About;
