import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../../styles";
import firebase from "../../../firebase";
import { useLocation, useHistory, Link } from "react-router-dom";
import { RoleContext } from "../../../RoleContext";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

function Project() {
    const classes = styles();
    const location = useLocation();
    const [projectData, setProjectData] = useState([]);
    const [reload, setReload] = useState(true);
    const { role } = useContext(RoleContext);

    const history = useHistory();
    const handleAdd = () => {
        history.push({
            pathname: "/addEditProjectDetails",
            state: {
                ...location.state,
                projectData: projectData,
            },
        });
    };

    useEffect(() => {
        let data = [];
        firebase.db
            .collection("ProjectDetails")
            .doc(location.state.projectDetailsId)
            .get()
            .then(async (doc) => {
                if (!doc.exists) {
                    console.log("No such document!");
                } else {
                    console.log(doc.data());
                    setProjectData(doc.data());
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [reload]);
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container className={classes.aboutGrid}>
                <Grid item className={classes.avatarGrid}>
                    <Typography variant="h3" className={classes.orange}>
                        {location.state?.projectTitle}
                    </Typography>
                    {role === "admin" ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleAdd}>
                            Add/Edit project details
                        </Button>
                    ) : (
                        ""
                    )}
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography
                        variant="h5"
                        className={`${classes.orange} ${classes.marginTop}`}>
                        About:
                    </Typography>
                    <Typography variant="body1">
                        <pre className={classes.aboutText}>
                            {projectData.about}
                        </pre>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography
                        variant="h5"
                        className={`${classes.orange} ${classes.marginTop}`}>
                        Technology:
                    </Typography>
                    <ul>
                        {projectData.technologies
                            ?.split(", ")
                            .map((data, index) => {
                                return (
                                    <li key={index}>
                                        <Typography variant="p">
                                            {data}
                                        </Typography>
                                    </li>
                                );
                            })}
                    </ul>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography
                        variant="h5"
                        className={`${classes.orange} ${classes.marginTop}`}>
                        Demo Link:{" "}
                    </Typography>
                    <Typography variant="p">
                        <a
                            href={projectData.demoLink}
                            target="_blank"
                            className={classes.link}>
                            {projectData.demoLink}
                            <OpenInNewIcon style={{ foneSize: 16 }} />
                        </a>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography
                        variant="h5"
                        className={`${classes.orange} ${classes.marginTop}`}>
                        Github Link:
                    </Typography>
                    <Typography variant="p">
                        <a
                            href={projectData.githubLink}
                            target="_blank"
                            className={classes.link}>
                            {projectData.githubLink}
                            <OpenInNewIcon style={{ foneSize: 16 }} />
                        </a>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} className={classes.buttonMargin}>
                    <Link to="/#projects">
                        <Button
                            size="small"
                            variant="contained"
                            color="primary">
                            Back
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Project;
