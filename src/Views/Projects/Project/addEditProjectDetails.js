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

function AddEditProjectDetails({ data }) {
    const classes = styles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container className={classes.aboutGrid} spacing={10}>
                <Formik
                    initialValues={{
                        name: data?.data.name,
                        desc: data?.data.desc,
                        designation: data?.data.designation,
                        type: data?.data.type,
                        startDate: data?.data.startDate,
                        endDate: data?.data.endDate,
                        location: data?.data.location,
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Required";
                        }
                        if (!values.desc) {
                            errors.desc = "Required";
                        }
                        if (!values.startDate) {
                            errors.startDate = "Required";
                        }
                        if (!values.endDate) {
                            errors.endDate = "Required";
                        }
                        if (!values.location) {
                            errors.location = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(data.id);
                        // setTimeout(() => {
                        //     console.log(values);
                        // }, 500);
                        firebase.db
                            .collection("Experience")
                            .doc(data.id)
                            .update(values)
                            .then(() => {
                                setSubmitting(false);
                                // handleClose();
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
