import React from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../styles";

function About() {
    const classes = styles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            {/* <Grid container>
                <Grid item lg={2} md>
                    <Typography variant="h4" className={classes.heading}>
                        About
                    </Typography>
                </Grid>
                <Grid item lg={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid> */}
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container className={classes.aboutGrid} spacing={10}>
                    <Grid item sm={5} xs={12} className={classes.avatarGrid}>
                        <img className={classes.avatar} src="pic22.png" />
                    </Grid>
                    <Grid item sm={7} xs={12} className={classes.aboutContent}>
                        <Typography variant="h5">Hi, I'm</Typography>
                        <Typography variant="h3">Ankit Kumar</Typography>
                        <Typography variant="body1">
                            Javascript Full stack developer proficient in MEAN
                            and MERN stack developement. Experienced in
                            end-to-end developement phase of an application.
                        </Typography>
                        <Typography variant="body1"> </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default About;
