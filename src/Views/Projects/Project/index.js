import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../../styles";
import firebase from "../../../firebase";
import { useParams } from "react-router-dom";

function Project() {
    const classes = styles();

    console.log(useParams());
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container className={classes.aboutGrid} spacing={10}>
                <Grid item className={classes.avatarGrid}>
                    <Typography variant="h5">Title</Typography>
                </Grid>
                {/* <Grid item sm={5} xs={12} className={classes.avatarGrid}>
                    <img className={classes.avatar} src="pic22.png" />
                </Grid>
                <Grid item sm={7} xs={12} className={classes.aboutContent}>
                    <Typography variant="h5">Hi, I'm</Typography>
                    {/* <Typography variant="h3">{aboutData.name}</Typography>
                    <Typography variant="body1">{aboutData.about}</Typography> 
                    <Typography variant="body1"> </Typography>
                </Grid> */}
            </Grid>
        </Container>
    );
}

export default Project;
