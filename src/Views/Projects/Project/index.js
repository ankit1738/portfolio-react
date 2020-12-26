import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../../styles";
import firebase from "../../../firebase";
import { useParams, useLocation, useHistory, Link } from "react-router-dom";

function Project() {
    const classes = styles();
    const location = useLocation();
    const [projectData, setProjectData] = useState([]);
    const [reload, setReload] = useState(true);
    // const { id: projectId } = useParams();
    const history = useHistory();
    console.log(location);
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
            <Grid container className={classes.aboutGrid} spacing={10}>
                <Grid item className={classes.avatarGrid}>
                    <Typography variant="h3">
                        {location.state?.projectTitle}
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}>
                        Add/Edit project details
                    </Button>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">About:</Typography>
                    <Typography variant="body1">{projectData.about}</Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">Technology:</Typography>
                    <ul>
                        {projectData.technologies?.split(", ").map((data) => {
                            return (
                                <li>
                                    <Typography variant="p">{data}</Typography>
                                </li>
                            );
                        })}
                    </ul>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">
                        Demo Link: {projectData.demoLink}
                    </Typography>
                    <Typography variant="h5">
                        Github Link: {projectData.githubLink}
                    </Typography>
                </Grid>
                <Link to="/#projects">
                    <Button size="small" variant="contained" color="primary">
                        Back
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
}

export default Project;
