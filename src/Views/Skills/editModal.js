import React from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Modal } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import firebase from "../../firebase";

function EditModal({ open, handleClose, data }) {
    const classes = styles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={classes.paper}>
                <h3>Edit: </h3>
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
                                handleClose();
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
                                type="desc"
                                name="desc"
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="type"
                                name="type"
                                label="Type"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="designation"
                                name="designation"
                                label="Designation"
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

export default EditModal;
