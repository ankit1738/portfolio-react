import React, { Fragment } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import {
    useStyles as styles,
    StyledTypography as Typography,
    StyledProgress as LinearProgress,
    StyledTooltip as Tooltip,
} from "./styles";
import ProjectCard from "./projectCard";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Projects() {
    const classes = styles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2} md={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Projects
                    </Typography>
                </Grid>
                <Grid item lg={10} md={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <Grid container justify="space-between" spacing={10}>
                            <Grid item md={4}>
                                <ProjectCard
                                    projectName="My Pet Blog"
                                    img="angular_1.png"
                                />
                            </Grid>
                            <Grid item md={4}>
                                <ProjectCard
                                    projectName="ImageCrop"
                                    img="node_1.jpg"
                                />
                            </Grid>
                            <Grid item md={4}>
                                <ProjectCard projectName="Techathon" />
                            </Grid>
                            <Grid item md={4}>
                                <ProjectCard projectName="My Pet Blog" />
                            </Grid>
                            <Grid item md={4}>
                                <ProjectCard projectName="ImageCrop" />
                            </Grid>
                            <Grid item md={4}>
                                <ProjectCard projectName="Techathon" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={10} className={classes.allProject}>
                        <Link to="">All Projects -{">"}</Link>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Projects;
