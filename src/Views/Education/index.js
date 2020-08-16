import React, { Fragment } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import {
    useStyles as styles,
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "./styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";

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
                            <TimelineComponent
                                name="Lovely Professiona University"
                                degree="Bachelor of Technology"
                                course="Computer Science and Engineering"
                                grade="8.7"
                                gradePoint="CGPA"
                                startDate="2015"
                                endDate="2019"
                                location="Jalandhar, Punjab"
                            />
                            <TimelineComponent
                                name="Kendriya Vidayalaya Sulur, Tamil Nadu"
                                degree="Class XII"
                                course="Science"
                                grade="87"
                                gradePoint="%"
                                startDate="2013"
                                endDate="2014"
                                location="Coimbatore, TN"
                            />
                            <TimelineComponent
                                name="Kendriya Vidayalaya Cooch Behar, West Bengal"
                                degree="Class X"
                                grade="9.2"
                                gradePoint="CGPA"
                                startDate="2011"
                                endDate="2012"
                                location="Cooch Behar, West Bengal"
                            />
                            <TimelineLastComponent />
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default About;
