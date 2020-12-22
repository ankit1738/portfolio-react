import React from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Modal } from "@material-ui/core";
import { TextField, SimpleFileUpload } from "formik-material-ui";
import firebase from "../../firebase";
import _ from "lodash";

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
                        image: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Required";
                        }
                        // if (!values.image) {
                        //     errors.image = "Required";
                        // }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        if (values.image) {
                            const uploadTask = firebase.storage
                                .ref(
                                    `/images/${values.image.name}_${new Date()}`
                                )
                                .put(values.image);
                            await uploadTask.on(
                                "state_changed",
                                console.log,
                                console.error,
                                () => {
                                    firebase.storage
                                        .ref("images")
                                        .child(values.image.name)
                                        .getDownloadURL()
                                        .then((url) => {
                                            // setImageURL(url);
                                            values.imageURL = url;
                                            console.log(
                                                _.omit(values, "image")
                                            );
                                            firebase.db
                                                .collection("Projects")
                                                .doc(data.id)
                                                .update(_.omit(values, "image"))
                                                .then((doc) => {
                                                    // console.log(doc);
                                                    setSubmitting(false);
                                                    handleClose();
                                                })
                                                .catch((error) =>
                                                    console.log(error)
                                                );
                                        });
                                }
                            );
                        } else {
                            firebase.db
                                .collection("Projects")
                                .doc(data.id)
                                .update(_.omit(values, "image"))
                                .then((doc) => {
                                    // console.log(doc);
                                    setSubmitting(false);
                                    handleClose();
                                })
                                .catch((error) => console.log(error));
                        }
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
                                component={SimpleFileUpload}
                                name="image"
                                label="Image"
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
