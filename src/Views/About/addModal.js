import React from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Modal } from "@material-ui/core";
import { TextField, InputBase } from "formik-material-ui";
import firebase from "../../firebase";

function AddModal({ open, handleClose, data }) {
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
                        about: data?.data.about,
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Required";
                        }
                        if (!values.about) {
                            errors.abour = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        firebase.db
                            .collection("About")
                            .add(values)
                            .then((doc) => {
                                // console.log(doc);
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
                                type="text"
                                label="Name"
                                fullWidth
                            />
                            <br />
                            <Field
                                component={TextField}
                                name="about"
                                type="text"
                                label="About"
                                multiline
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
