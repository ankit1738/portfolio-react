import React from "react";
import { Container, Divider, Grid, Box } from "@material-ui/core";
import {
    useStyles as styles,
    StyledProgress as LinearProgress,
    StyledTooltip as Tooltip,
} from "./styles";
import { StyledTypography as Typography } from "../../styles";
import skillsData from "../../static/data/skills.json";

function Skills() {
    const classes = styles();
    // const length = skills.length / 2;
    // let skillSet1 = skills.splice(0, length);
    // let skillSet2 = skills.splice(-length);
    // console.log(skillsData);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={3} md={3}>
                    <Typography variant="h4" className={classes.heading}>
                        Technical Skills
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center" spacing={10}>
                    <Grid item lg={5} md={5}>
                        {skillsData
                            .slice(0, skillsData.length / 2)
                            .map((data) => {
                                return (
                                    <Box className={classes.marginTop}>
                                        <Typography variant="h6">
                                            {data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.level}
                                            />
                                        </Tooltip>
                                    </Box>
                                );
                            })}
                    </Grid>
                    <Grid item lg={5} md={5}>
                        {skillsData
                            .slice(-skillsData.length / 2)
                            .map((data) => {
                                return (
                                    <Box className={classes.marginTop}>
                                        <Typography variant="h6">
                                            {data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.level}
                                            />
                                        </Tooltip>
                                    </Box>
                                );
                            })}
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Skills;
