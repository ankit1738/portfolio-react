import React, { Fragment, useState } from "react";
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
import moment from "moment";

export function TimelineComponent(props) {
    const classes = styles();
    let duration;
    let endDate = props.data.endDate;
    if (props.data.endDate === "Present") {
        endDate = moment().format("MMM YYYY");
        console.log(endDate);
    }
    const durationMonths = moment(endDate, "MMM YYYY").diff(
        moment(props.data.startDate),
        "months"
    );
    const durationYear = moment(endDate, "MMM YYYY").diff(
        moment(props.data.startDate),
        "years"
    );

    duration =
        durationYear === 0
            ? durationMonths > 1
                ? durationMonths + ` months`
                : durationMonths + ` month`
            : durationYear > 1
            ? durationYear + ` years`
            : durationYear + ` year`;

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
                                    <Typography
                                        variant="h5"
                                        className={classes.title}>
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
                                        {props.data.endDate} · {duration}
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
                                {props.role === "admin" ? (
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
                                ) : (
                                    ""
                                )}
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
