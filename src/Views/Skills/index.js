import React, { useState } from "react";
import { Container, Divider, Grid, Box, Button } from "@material-ui/core";
import {
    useStyles as styles,
    StyledProgress as LinearProgress,
    StyledTooltip as Tooltip,
} from "./styles";
import { StyledTypography as Typography } from "../../styles";
import skillsData from "../../static/data/skills.json";
import EditModal from "./editModal";
import AddModal from "./addModal";

function Skills(props) {
    const classes = styles();
    const [skillData, setSkillData] = useState([]);
    const [editData, setEditData] = useState();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [reload, setReload] = useState(true);

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

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={3} md={3}>
                    <Typography variant="h4" className={classes.heading}>
                        Technical Skills
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAddModal}>
                        Add Skills
                    </Button>
                </Grid>
                <Grid item lg={9} md={9} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center" spacing={10}>
                    <Grid item lg={5} md={5}>
                        {skillsData
                            .slice(0, skillsData.length / 2)
                            .map((data, index) => {
                                return (
                                    <Box
                                        className={classes.marginTop}
                                        key={index}>
                                        <Typography variant="h6">
                                            {data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.level}
                                            />
                                        </Tooltip>
                                        <Grid item lg={12}>
                                            <>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() =>
                                                        props.edit(props.id)
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
                                                        props.handleDelete(
                                                            props.id
                                                        )
                                                    }>
                                                    Delete
                                                </Button>
                                            </>
                                        </Grid>
                                    </Box>
                                );
                            })}
                    </Grid>
                    <Grid item lg={5} md={5}>
                        {skillsData
                            .slice(-skillsData.length / 2)
                            .map((data, index) => {
                                return (
                                    <Box
                                        className={classes.marginTop}
                                        key={index}>
                                        <Typography variant="h6">
                                            {data.name}
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            title={data.level}
                                            placement="top-end">
                                            <LinearProgress
                                                variant="determinate"
                                                value={data.level}
                                            />
                                        </Tooltip>
                                        <Grid item lg={12}>
                                            <>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() =>
                                                        props.edit(props.id)
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
                                                        props.handleDelete(
                                                            props.id
                                                        )
                                                    }>
                                                    Delete
                                                </Button>
                                            </>
                                        </Grid>
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
