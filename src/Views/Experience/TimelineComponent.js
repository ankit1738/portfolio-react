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
                        <Grid item lg={12}>
                            <Grid container className={classes.centerGrid}>
                                <Grid item lg={6} xs={12}>
                                    <Typography variant="h5">
                                        {props.data.name}
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography
                                        variant="body1"
                                        align={
                                            window.innerWidth < 600
                                                ? "left"
                                                : "right"
                                        }>
                                        {props.data.location}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Typography variant="body1">
                                        {props.data.designation} ·{" "}
                                        {props.data.type}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Typography variant="body1">
                                        {props.data.startDate} -{" "}
                                        {props.data.endDate} · 1 Year
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    xs={12}
                                    className={classes.desc}>
                                    <Typography variant="body2">
                                        {props.data.desc}
                                    </Typography>
                                </Grid>
                                <Grid item lg={12}>
                                    <>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() =>
                                                props.edit(props.id)
                                            }>
                                            Edit
                                        </Button>
                                        <Button
                                            className={classes.leftMargin}
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            onClick={() =>
                                                props.handleDelete(props.id)
                                            }>
                                            Delete
                                        </Button>
                                    </>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item lg={3}>
                            <Typography variant="body1" align="right">
                                {props.data.location}
                            </Typography>
                        </Grid> */}
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
