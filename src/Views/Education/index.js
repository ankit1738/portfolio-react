import React, { useState, useEffect, useContext } from "react";
import { Container, Divider, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";
import {
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "../../styles";
import EditModal from "./editModal";
import firebase from "../../firebase";
import { RoleContext } from "../../RoleContext";
import AddModal from "./addModal";

// import educationData from "../../static/data/education.json";

function About() {
    const { role } = useContext(RoleContext);
    const classes = styles();
    const [educationData, setEducationData] = useState([]);
    const [editData, setEditData] = useState();
    const [addData, setAddData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);

    const [reload, setReload] = useState(true);

    useEffect(() => {
        let data = [];
        firebase.db
            .collection("Education")
            .orderBy("startDate", "desc")
            .get()
            .then(async (querySnapshot) => {
                await querySnapshot.docs.forEach((doc) => {
                    data.push({ id: doc.id, data: doc.data() });
                });
                setEducationData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [reload]);

    const handleOpenEditModal = (id) => {
        // console.log(id);
        setEditData(educationData.find((item) => item.id === id));
        setOpenEditModal(true);
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

    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this record?")) {
            firebase.db
                .collection("Education")
                .doc(id)
                .delete()
                .then(() => {
                    setReload((prev) => !prev);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Education
                    </Typography>
                    {role === "admin" ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleOpenAddModal}>
                            Add Education
                        </Button>
                    ) : (
                        ""
                    )}
                </Grid>
                <Grid item lg={10} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item lg={10}>
                        <Timeline>
                            {educationData?.map((doc, index) => {
                                return (
                                    <TimelineComponent
                                        data={doc.data}
                                        key={index}
                                        id={doc.id}
                                        handleOpenEditModal={
                                            handleOpenEditModal
                                        }
                                        handleDelete={handleDelete}
                                        role={role}
                                    />
                                );
                            })}
                            <TimelineLastComponent />
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
            <EditModal
                openEditModal={openEditModal}
                handleCloseEditModal={handleCloseEditModal}
                data={editData}
                // setEducationData={setEducationData}
            />
            <AddModal
                openAddModal={openAddModal}
                handleCloseAddModal={handleCloseAddModal}
                data={addData}
            />
        </Container>
    );
}

export default About;
