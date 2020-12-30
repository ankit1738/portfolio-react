import React, { useState, useEffect, useContext } from "react";
import { Container, Divider, Grid, Box, Button } from "@material-ui/core";
import {
    useStyles as styles,
    StyledProgress as LinearProgress,
    StyledTooltip as Tooltip,
} from "./styles";
import { StyledTypography as Typography } from "../../styles";
// import skillsData from "../../static/data/skills.json";
import EditModal from "./editModal";
import AddModal from "./addModal";
import firebase from "../../firebase";
import { RoleContext } from "../../RoleContext";

function Skills() {
    const classes = styles();
    const [skillsData, setSkillsData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);
    const { role } = useContext(RoleContext);

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

    const edit = (id) => {
        console.log(id);
        setEditData(skillsData.find((item) => item.id === id));
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
    useEffect(() => {
        let data = [];
        firebase.db
            .collection("Skills")
            .get()
            .then(async (querySnapshot) => {
                await querySnapshot.docs.forEach((doc) => {
                    data.push({ id: doc.id, data: doc.data() });
                });
                console.log(data);
                setSkillsData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [reload]);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={3} md={3}>
                    <Typography variant="h4" className={classes.heading}>
                        Technical Skills
                    </Typography>
                    {role === "admin" ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleOpenAddModal}>
                            Add Skills
                        </Button>
                    ) : (
                        ""
                    )}
                </Grid>
                <Grid item lg={9} md={9} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid
                    container
                    justify={
                        window.innerWidth < 600 ? "space-between" : "center"
                    }>
                    <Grid item lg={5} md={5} className={classes.spacingRight}>
                        {skillsData
                            .slice(0, Math.ceil(skillsData.length / 2))
                            .map((data, index) => {
                                return (
                                    <Box
                                        className={classes.marginTop}
                                        key={index}>
                                        <Typography variant="h6">
                                            {data.data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.data.level}
                                            />
                                        </Tooltip>
                                        {role === "admin" ? (
                                            <Grid item lg={12}>
                                                <>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() =>
                                                            edit(data.id)
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
                                                            handleDelete(
                                                                data.id
                                                            )
                                                        }>
                                                        Delete
                                                    </Button>
                                                </>
                                            </Grid>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                );
                            })}
                    </Grid>
                    <Grid item lg={5} md={5} className={classes.spacingLeft}>
                        {skillsData
                            .slice(-Math.floor(skillsData.length / 2))
                            .map((data, index) => {
                                return (
                                    <Box
                                        className={classes.marginTop}
                                        key={index}>
                                        <Typography variant="h6">
                                            {data.data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.data.level}
                                            />
                                        </Tooltip>
                                        {role === "admin" ? (
                                            <Grid item lg={12}>
                                                <>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() =>
                                                            edit(data.id)
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
                                                            handleDelete(
                                                                data.id
                                                            )
                                                        }>
                                                        Delete
                                                    </Button>
                                                </>
                                            </Grid>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                );
                            })}
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

export default Skills;
