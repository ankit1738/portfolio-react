import React from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";
import {
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "../../styles";

import educationData from "../../static/data/education.json";

function About() {
    const classes = styles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Education
                    </Typography>
                </Grid>
                <Grid item lg={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item lg={10}>
                        <Timeline>
                            {educationData.map((value) => {
                                return <TimelineComponent data={value} />;
                            })}
                            <TimelineLastComponent />
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default About;
