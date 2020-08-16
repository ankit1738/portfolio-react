import React, { Fragment } from "react";
import { Container, Divider, Grid, Box } from "@material-ui/core";
import {
    useStyles as styles,
    StyledTypography as Typography,
    StyledProgress as LinearProgress,
    StyledTooltip as Tooltip,
} from "./styles";

function Skills() {
    const classes = styles();

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
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">Nodejs</Typography>
                            <Tooltip arrow title="75%" placement="top-end">
                                <LinearProgress
                                    variant="determinate"
                                    value={75}
                                />
                            </Tooltip>
                        </Box>
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">Reactjs</Typography>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">Angular 2+</Typography>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5}>
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">Javascript</Typography>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">MongoDB</Typography>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>
                        <Box className={classes.marginTop}>
                            <Typography variant="h6">C++</Typography>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Skills;
