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
import { Grid, Typography, Button } from "@material-ui/core";

export function TimelineComponent(props) {
    const classes = styles();
    return (
        <Fragment>
            <TimelineItem>
                <TimelineOppositeContent
                    style={{
                        flex: 0,
                        padding: 0,
                    }}></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Grid container className={classes.contentPadding}>
                        <Grid item lg={9} xs={12}>
                            <Grid container className={classes.centerGrid}>
                                <Grid item lg={12}>
                                    <Typography variant="h5">
                                        {props.data.name}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        {props.data.degree}
                                        {props.data.course
                                            ? ", " + props.data.course
                                            : null}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <Typography variant="body1">
                                        Grade: {props.data.grade}{" "}
                                        {props.data.gradePoint}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    {props.role === "admin" ? (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() =>
                                                props.edit(props.id)
                                            }>
                                            Edit
                                        </Button>
                                    ) : null}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography variant="body1" align="right">
                                {props.data.startDate} - {props.data.endDate}
                            </Typography>
                            <Typography variant="body1" align="right">
                                {props.data.location}
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
                        padding: 0,
                    }}></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
            </TimelineItem>
        </Fragment>
    );
}
