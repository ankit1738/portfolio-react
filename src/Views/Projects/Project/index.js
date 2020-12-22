import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../../styles";
import firebase from "../../../firebase";
import { useParams, useLocation, useHistory } from "react-router-dom";

function Project() {
    const classes = styles();
    const location = useLocation();
    const [projectData, setProjectData] = useState([]);
    const [reload, setReload] = useState(true);
    const { id: projectId } = useParams();
    const history = useHistory();

    const handleAdd = () => {
        history.push("/addEditProjectDetails");
    };

    useEffect(() => {
        let data = [];
        firebase.db
            .collection("Project")
            .doc(projectId)
            .get()
            .then(async (querySnapshot) => {
                if (!querySnapshot.exists) {
                    console.log("No such document!");
                } else {
                    await querySnapshot.docs.forEach((doc) => {
                        data.push({ id: doc.id, data: doc.data() });
                    });
                    setProjectData(data);
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
                    <Typography variant="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">Technology:</Typography>
                    <ul>
                        <li>
                            <Typography variant="p">Nodejs</Typography>
                        </li>
                        <li>
                            <Typography variant="p">Reactjs</Typography>
                        </li>
                        <li>
                            <Typography variant="p">Firebase</Typography>
                        </li>
                        <li>
                            <Typography variant="p">CSS</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">Demo Link:</Typography>
                    <Typography variant="h5">Github Link:</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Project;
