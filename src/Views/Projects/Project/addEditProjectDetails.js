import React from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import {
    Container,
    Grid,
    Button,
    LinearProgress,
    Modal,
} from "@material-ui/core";
import { TextField, InputBase } from "formik-material-ui";
import firebase from "../../../firebase";
import { useLocation, useHistory } from "react-router-dom";

function AddEditProjectDetails() {
    const classes = styles();
    const location = useLocation();
    const history = useHistory();
    const ids = location.state.ids;
    const projectData = location.state.projectData;

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container className={classes.aboutGrid}>
                <Formik
                    initialValues={{
                        about: projectData.about,
                        technologies: projectData.technologies,
                        demoLink: projectData.demoLink,
                        githubLink: projectData.githubLink,
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.about) {
                            errors.about = "Required";
                        }
                        if (!values.technologies) {
                            errors.technologies = "Required";
                        }
                        if (!values.demoLink) {
                            errors.demoLink = "Required";
                        }
                        if (!values.githubLink) {
                            errors.githubLink = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // setTimeout(() => {
                        //     console.log(values);
                        // }, 500);
                        firebase.db
                            .collection("ProjectDetails")
                            .doc(location.state.projectDetailsId)
                            .update(values)
                            .then(() => {
                                setSubmitting(false);
                                history.push({
                                    pathname:
                                        "/project/" + location.state.projectId,
                                    state: {
                                        ...location.state,
                                    },
                                });
                            })
                            .catch((error) => console.log(error));
                    }}>
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            <Field
                                component={TextField}
                                name="about"
                                label="About"
                                multiline
                                fullWidth
                            />
                            <Field
                                component={TextField}
                                name="technologies"
                                label="Technologies (Seperate by comma)"
                                multiline
                                fullWidth
                            />
                            <Field
                                component={TextField}
                                name="demoLink"
                                label="Demo Link"
                                fullWidth
                            />
                            <Field
                                component={TextField}
                                name="githubLink"
                                label="Github Link"
                                fullWidth
                            />
                            <br />
                            {isSubmitting && <LinearProgress />}
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => history.goBack()}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={submitForm}>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Container>
    );
}

export default AddEditProjectDetails;
