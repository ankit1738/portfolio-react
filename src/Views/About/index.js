import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../styles";
import firebase from "../../firebase";

function About() {
    const classes = styles();
    const [aboutData, setAboutData] = useState([]);
    useEffect(() => {
        firebase.db
            .collection("About")
            .doc("8hv6MRWHNgm7quA34GBq")
            .get()
            .then(async (querySnapshot) => {
                setAboutData(querySnapshot.data());
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
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
                        <Typography variant="h3">{aboutData.name}</Typography>
                        <Typography variant="body1">
                            {aboutData.about}
                        </Typography>
                        <Typography variant="body1"> </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default About;
