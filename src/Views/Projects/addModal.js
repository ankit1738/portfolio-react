import React, { useState } from "react";
import { useStyles as styles } from "./styles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Modal } from "@material-ui/core";
import { TextField, SimpleFileUpload } from "formik-material-ui";
import firebase from "../../firebase";
import _ from "lodash";

function AddModal({ open, handleClose, data }) {
    const classes = styles();
    const [imageURL, setImageURL] = useState();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={classes.paper}>
                <h3>Add: </h3>
                <Formik
                    initialValues={{
                        name: "",
                        image: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Required";
                        }
                        if (!values.image) {
                            errors.image = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        const imageName = values.image.name + "_" + new Date();
                        const uploadTask = firebase.storage
                            .ref(`/images/${imageName}`)
                            .put(values.image);
                        uploadTask.on(
                            "state_changed",
                            console.log,
                            console.error,
                            async () => {
                                try {
                                    let imgUrl = await firebase.storage
                                        .ref("images")
                                        .child(imageName)
                                        .getDownloadURL();
                                    values.imageURL = imgUrl;

                                    const projectDetails = await firebase.db
                                        .collection("ProjectDetails")
                                        .add({});

                                    const project = await firebase.db
                                        .collection("Projects")
                                        .add(
                                            _.omit(
                                                {
                                                    ...values,
                                                    projectDetails:
                                                        projectDetails.id,
                                                },
                                                "image"
                                            )
                                        );

                                    const projectDetailsUpdated = await firebase.db
                                        .collection("ProjectDetails")
                                        .doc(projectDetails.id)
                                        .update({ project: project.id });
                                    setSubmitting(false);
                                    handleClose();
                                } catch (error) {
                                    setSubmitting(false);

                                    console.log(console.error(error));
                                }
                            }
                        );
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

export default AddModal;
