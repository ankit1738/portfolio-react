import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../styles";
import firebase from "../../firebase";
import EditModal from "./editModal";
import AddModal from "./addModal";

function About() {
    const classes = styles();
    const [aboutData, setAboutData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);

    const edit = (id) => {
        console.log(id);
        setEditData(aboutData);
        setOpenEditModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this record?")) {
            firebase.db
                .collection("Skills")
                .doc(id)
                .delete()
                .then(() => {
                    setReload((prev) => !prev);
                })
                .catch((error) => console.log(error));
        }
    };

    const handleOpenAddModal = (id) => {
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

    useEffect(() => {
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
    }, [reload]);
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container className={classes.aboutGrid} spacing={10}>
                    <Grid item sm={5} xs={12} className={classes.avatarGrid}>
                        <img className={classes.avatar} src="pic22.png" />
                    </Grid>
                    <Grid item sm={7} xs={12} className={classes.aboutContent}>
                        <Typography variant="h5">Hi, I'm</Typography>
                        <Typography variant="h3">
                            {aboutData.data?.name}
                        </Typography>
                        <Typography variant="body1">
                            {aboutData.data?.about}
                        </Typography>
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
                                    onClick={() => handleDelete(aboutData.id)}>
                                    Delete
                                </Button>
                            </>
                        </Grid>
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
