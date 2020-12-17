import React, { useState, useEffect } from "react";
import { Container, Divider, Grid, Button } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import {
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "../../styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";
import EditModal from "./editModal";
import AddModal from "./addModal";
import firebase from "../../firebase";
import moment from "moment";
// import experienceData from "../../static/data/experience.json";

function Experience() {
    const classes = styles();
    const [experienceData, setExperienceData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        console.log("REnder");
        let data = [];
        firebase.db
            .collection("Experience")
            .get()
            .then(async (querySnapshot) => {
                await querySnapshot.docs.forEach((doc) => {
                    data.push({ id: doc.id, data: doc.data() });
                });
                data.sort((x, y) => {
                    return moment(y.data.startDate).diff(
                        moment(x.data.startDate),
                        "days"
                    );
                });
                setExperienceData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [reload]);

    const edit = (id) => {
        console.log(id);
        setEditData(experienceData.find((item) => item.id === id));
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
                .collection("Experience")
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
                <Grid item md={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Experience
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAddModal}>
                        Add Experience
                    </Button>
                </Grid>
                <Grid item md={10} className={classes.contentContainer}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <Timeline>
                            {experienceData.map((doc, index) => {
                                return (
                                    <TimelineComponent
                                        data={doc.data}
                                        key={index}
                                        id={doc.id}
                                        edit={edit}
                                        handleDelete={handleDelete}
                                    />
                                );
                            })}
                            <TimelineLastComponent />
                        </Timeline>
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

export default Experience;
