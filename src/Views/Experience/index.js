import React from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import {
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "../../styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";
import experienceData from "../../static/data/experience.json";
function Experience() {
    const classes = styles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item md={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Experience
                    </Typography>
                </Grid>
                <Grid item md={10} className={classes.contentContainer}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <Timeline>
                            {experienceData.map((value) => {
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

export default Experience;
