import React, { Fragment } from "react";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from "@material-ui/lab";
import { useStyles as styles } from "./styles";
import { Grid, Typography } from "@material-ui/core";

export function TimelineComponent(props) {
    const classes = styles();

    return (
        <Fragment>
            <TimelineItem>
                <TimelineOppositeContent
                    style={{
                        flex: 0,
                    }}></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Grid container className={classes.contentPadding}>
                        <Grid item lg={10}>
                            <Grid container className={classes.centerGrid}>
                                <Grid item lg={12}>
                                    <Typography variant="h5">
                                        {props.name}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        {props.degree} , {props.course}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        Grade: {props.grade} {props.gradePoint}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Typography variant="body1" align="right">
                                {props.startDate} - {props.endDate}
                            </Typography>
                            <Typography variant="body1" align="right">
                                {props.location}
                            </Typography>
                        </Grid>
                    </Grid>
                </TimelineContent>
            </TimelineItem>
        </Fragment>
    );
}

export function TimelineLastComponent() {
    return (
        <Fragment>
            <TimelineItem>
                <TimelineOppositeContent
                    style={{
                        flex: 0,
                    }}></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
            </TimelineItem>
        </Fragment>
    );
}
