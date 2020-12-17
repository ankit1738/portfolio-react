import React from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Modal } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import firebase from "../../firebase";

function AddModal({ openAddModal, handleCloseAddModal, data }) {
    const classes = styles();
    return (
        <Modal
            open={openAddModal}
            onClose={handleCloseAddModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={classes.paper}>
                <h3>Edit: </h3>
                <Formik
                    initialValues={{
                        name: "",
                        degree: "",
                        course: "",
                        grade: "",
                        gradePoint: "",
                        startDate: "",
                        endDate: "",
                        location: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Required";
                        }
                        if (!values.degree) {
                            errors.degree = "Required";
                        }
                        if (!values.grade) {
                            errors.grade = "Required";
                        }
                        if (!values.gradePoint) {
                            errors.gradePoint = "Required";
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
                        firebase.db
                            .collection("Education")
                            .add(values)
                            .then((doc) => {
                                // console.log(doc);
                                setSubmitting(false);
                                handleCloseAddModal();
                            })
                            .catch((error) => console.log(error));
                    }}>
                    {({ submitForm, isSubmitting }) => (
                        <Form>
                            <Field
                                component={TextField}
                                name="name"
                                type="name"
                                label="Name"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="degree"
                                name="degree"
                                label="Degree"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="course"
                                name="course"
                                label="Course"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="grade"
                                name="grade"
                                label="Grade"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="gradePoint"
                                name="gradePoint"
                                label="Grade Point"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="startDate"
                                name="startDate"
                                label="Start Date"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="endDate"
                                name="endDate"
                                label="End Date"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="location"
                                name="location"
                                label="Location"
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
            </div>
        </Modal>
    );
}

export default AddModal;
