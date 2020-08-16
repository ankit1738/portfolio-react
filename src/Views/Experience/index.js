import React, { Fragment } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import {
    useStyles as styles,
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "./styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";

function Experience() {
    const classes = styles();
    const desc = {
        desc1:
            "Hired as a full stack developer I am mapped to project Globalize and working on Reactjs for frontend developement",
        desc2:
            '● Worked as a Full Stack developer for adding new features to project "Marathon".\n● Learnt about the developement and deploying process of a live project.\n● Tech Stack - Javascript, .Net and EF6 Core.',
        desc3:
            '● Successfully develped TEKSystem\'s internal social media website called "TEKOne"\n● Our team completed this intenship task before the deadline and deployed the first version.\n● I was responsible for both frontend and backend developement of various feature modules.\n● Tech Stack - Nodejs, Angular 7 and MongoDB.',
    };
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Experience
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
                            <TimelineComponent
                                name="Mantra Labs Global"
                                designation="Software Engineer"
                                type="Full Time"
                                startDate="Jun 2020"
                                endDate="Present"
                                desc={desc.desc1}
                                location="Bengaluru, Karnataka"
                            />
                            <TimelineComponent
                                name="TekSystems"
                                designation="Associate Engineer"
                                type="Full Time"
                                startDate="Aug 2019"
                                endDate="Jun 2020"
                                desc={desc.desc2}
                                location="Bengaluru, Karnataka"
                            />
                            <TimelineComponent
                                name="TekSystems"
                                designation="Project Trainee"
                                type="Full Time"
                                startDate="Jan 2019"
                                endDate="Aug 2020"
                                desc={desc.desc3}
                                location="Bengaluru, Karnataka"
                            />
                            <TimelineLastComponent />
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Experience;
