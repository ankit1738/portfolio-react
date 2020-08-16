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
                        <Grid item lg={9}>
                            <Grid container className={classes.centerGrid}>
                                <Grid item lg={12}>
                                    <Typography variant="h5">
                                        {props.name}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        {props.designation} · {props.type}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        {props.startDate} - {props.endDate} · 1
                                        Year
                                    </Typography>
                                </Grid>
                                <Grid item lg={12} className={classes.desc}>
                                    <Typography variant="body2">
                                        {props.desc}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
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