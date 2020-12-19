import React, { useState, useEffect } from "react";
import { Container, Divider, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import ProjectCard from "./projectCard";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { StyledTypography as Typography } from "../../styles";
import EditModal from "./editModal";
import AddModal from "./addModal";

function Projects() {
    const classes = styles();
    const [projectsData, setProjectsData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);

    const edit = (id) => {
        console.log(id);
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

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this record?")) {
            firebase.db
                .collection("Projects")
                .doc(id)
                .delete()
                .then(() => {
                    setReload((prev) => !prev);
                })
                .catch((error) => console.log(error));
        }
    };
    useEffect(() => {
        console.log("REnder");
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
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAddModal}>
                        Add Project
                    </Button>
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
                                    <Grid item md={4}>
                                        <Link to={"project/" + doc.id}>
                                            <ProjectCard
                                                key={index}
                                                projectName={doc.data.name}
                                                img={doc.data.imageURL}
                                            />
                                        </Link>
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
                                                        handleDelete(doc.id)
                                                    }>
                                                    Delete
                                                </Button>
                                            </>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item md={10} className={classes.allProject}>
                        <Link to="">All Projects -{">"}</Link>
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
