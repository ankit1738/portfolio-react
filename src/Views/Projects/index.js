import React, { useState, useEffect, useContext } from "react";
import { Container, Divider, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { StyledTypography as Typography } from "../../styles";
import EditModal from "./editModal";
import AddModal from "./addModal";
import { RoleContext } from "../../RoleContext";

function Projects() {
    const classes = styles();
    const [projectsData, setProjectsData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);
    const { role } = useContext(RoleContext);

    const edit = (id) => {
        setEditData(projectsData.find((item) => item.id === id));
        setOpenEditModal(true);
    };

    const handleCloseEditModal = (id) => {
        setOpenEditModal(false);
        setReload((prev) => !prev);
    };

    const handleOpenAddModal = (id) => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = (id) => {
        setOpenAddModal(false);
        setReload((prev) => !prev);
    };

    const handleDelete = (doc) => {
        if (window.confirm("Do you want to delete this record?")) {
            firebase.storage
                .refFromURL(doc.data.imageURL)
                .delete()
                .then(() => {
                    console.log("Image deleted");
                })
                .catch((err) => {
                    console.log(err);
                });
            firebase.db
                .collection("ProjectDetails")
                .doc(doc.data.projectDetails)
                .delete()
                .then(() => {
                    firebase.db
                        .collection("Projects")
                        .doc(doc.id)
                        .delete()
                        .then(() => {
                            setReload((prev) => !prev);
                        })
                        .catch((error) => console.log(error));
                });
        }
    };

    useEffect(() => {
        let data = [];
        firebase.db
            .collection("Projects")
            .get()
            .then(async (querySnapshot) => {
                await querySnapshot.docs.forEach((doc) => {
                    data.push({ id: doc.id, data: doc.data() });
                });
                console.log(data);
                setProjectsData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [reload]);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2} md={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Projects
                    </Typography>
                    {role === "admin" ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleOpenAddModal}>
                            Add Project
                        </Button>
                    ) : (
                        ""
                    )}
                </Grid>
                <Grid item lg={10} md={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <Grid container justify="space-between" spacing={10}>
                            {projectsData.map((doc, index) => {
                                return (
                                    <Grid item md={4} key={doc.id}>
                                        <Link
                                            to={{
                                                pathname: "/project/" + doc.id,
                                                state: {
                                                    projectTitle: doc.data.name,
                                                    projectId: doc.id,
                                                    projectDetailsId:
                                                        doc.data.projectDetails,
                                                },
                                            }}>
                                            <ProjectCard
                                                doc={doc}
                                                key={index}
                                                projectTitle={doc.data.name}
                                                img={doc.data.imageURL}
                                            />
                                        </Link>
                                        {role === "admin" ? (
                                            <Grid item lg={12}>
                                                <>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() =>
                                                            edit(doc.id)
                                                        }>
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        className={
                                                            classes.leftMargin
                                                        }
                                                        size="small"
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={() =>
                                                            handleDelete(doc)
                                                        }>
                                                        Delete
                                                    </Button>
                                                </>
                                            </Grid>
                                        ) : (
                                            ""
                                        )}
                                    </Grid>
                                );
                            })}
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

export default Projects;
