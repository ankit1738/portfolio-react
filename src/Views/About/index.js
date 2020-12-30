import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Button, LinearProgress } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../styles";
import firebase from "../../firebase";
import EditModal from "./editModal";
import AddModal from "./addModal";
import _ from "lodash";
import { Formik, Form, Field } from "formik";
import { TextField, SimpleFileUpload } from "formik-material-ui";
import { RoleContext } from "../../RoleContext";

function About() {
    const classes = styles();
    const [aboutData, setAboutData] = useState({});
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);
    const [dpURL, setDPURL] = useState();
    const { role } = useContext(RoleContext);

    const edit = (id) => {
        console.log(aboutData);
        if (!_.isEmpty(aboutData)) {
            setEditData(aboutData);
            setOpenEditModal(true);
        } else {
            window.alert("Add about data first");
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this record?")) {
            firebase.db
                .collection("About")
                .doc(id)
                .delete()
                .then(() => {
                    console.log("Deleted");
                    setReload((prev) => !prev);
                })
                .catch((error) => console.log(error));
        }
    };

    const handleOpenAddModal = () => {
        setOpenAddModal(true);
    };

    const handleCloseEditModal = (id) => {
        setOpenEditModal(false);
        setReload((prev) => !prev);
    };

    const handleCloseAddModal = (id) => {
        setOpenAddModal(false);
        setReload((prev) => !prev);
    };

    const deleteImage = () => {
        if (window.confirm("Do you want to delete this record?")) {
            const storageRef = firebase.storage.ref(`/images/DP/dp`);
            storageRef
                .delete()
                .then(function () {
                    console.log("File Deleted Sucessfully");
                    setReload((prev) => !prev);
                })
                .catch(function (error) {
                    console.log("error");
                });
        }
    };

    useEffect(() => {
        try {
            firebase.db
                .collection("About")
                .get()
                .then(async (querySnapshot) => {
                    await querySnapshot.docs.forEach((doc) => {
                        setAboutData({ id: doc.id, data: doc.data() });
                        console.log(doc.data());
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
            firebase.storage
                .ref("images/DP/dp")
                .getDownloadURL()
                .then((imgUrl) => {
                    setDPURL(imgUrl);
                })
                .catch((err) => {
                    console.log("DP not found");
                });
        } catch (err) {
            console.log(err);
        }
    }, [reload]);
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container className={classes.aboutGrid}>
                    <Grid item sm={5} xs={12} className={classes.avatarGrid}>
                        <img className={classes.avatar} src={dpURL} />
                        {role === "admin" ? (
                            <Grid item lg={12}>
                                <>
                                    <Formik
                                        initialValues={{
                                            image: "",
                                        }}
                                        validate={(values) => {
                                            const errors = {};

                                            if (!values.image) {
                                                errors.image = "Required";
                                            }
                                            return errors;
                                        }}
                                        onSubmit={async (
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            const uploadTask = await firebase.storage
                                                .ref(`/images/DP/dp`)
                                                .put(values.image);
                                            setSubmitting(false);
                                            setReload((prev) => !prev);
                                        }}>
                                        {({ submitForm, isSubmitting }) => (
                                            <Form>
                                                <Field
                                                    component={SimpleFileUpload}
                                                    name="image"
                                                    fullWidth
                                                />
                                                <br />
                                                {isSubmitting && (
                                                    <LinearProgress />
                                                )}
                                                <br />
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={submitForm}>
                                                    Change DP
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => deleteImage()}>
                                        Delete
                                    </Button>
                                </>
                            </Grid>
                        ) : (
                            ""
                        )}
                    </Grid>
                    <Grid item sm={7} xs={12} className={classes.aboutContent}>
                        {_.isEmpty(aboutData) && (
                            <Grid item lg={12}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleOpenAddModal}>
                                    Add about data
                                </Button>
                            </Grid>
                        )}
                        <Typography variant="h5">Hi, I'm</Typography>
                        <Typography variant="h3" className={classes.nameColor}>
                            {aboutData.data?.name}
                        </Typography>
                        <Typography variant="body1">
                            {aboutData.data?.about}
                        </Typography>
                        {role === "admin" ? (
                            <Grid item lg={12}>
                                <>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => edit(aboutData.id)}>
                                        Edit
                                    </Button>
                                    <Button
                                        className={classes.leftMargin}
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() =>
                                            handleDelete(aboutData.id)
                                        }>
                                        Delete
                                    </Button>
                                </>
                            </Grid>
                        ) : (
                            ""
                        )}
                    </Grid>
                </Grid>
            </Container>
            <EditModal
                open={openEditModal}
                handleClose={handleCloseEditModal}
                data={editData}
                // setEducationData={setEducationData}
            />
            <AddModal open={openAddModal} handleClose={handleCloseAddModal} />
        </Container>
    );
}

export default About;
