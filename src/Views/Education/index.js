import React, { useState, useEffect, useContext } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { TimelineComponent, TimelineLastComponent } from "./TimelineComponent";
import {
    StyledTypography as Typography,
    StyledTimeline as Timeline,
} from "../../styles";
import EditModal from "./editModal";
import firebase from "../../firebase";
import { RoleContext } from "../../RoleContext";
// import educationData from "../../static/data/education.json";

function About() {
    const { role } = useContext(RoleContext);
    const classes = styles();
    const [educationData, setEducationData] = useState([]);
    const [editData, setEditData] = useState();
    const [open, setOpen] = useState(false);
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

    const edit = (id) => {
        // console.log(id);
        setEditData(educationData.find((item) => item.id === id));
        setOpen(true);
    };

    const handleClose = (id) => {
        setOpen(false);
        setReload((prev) => !prev);
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item lg={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Education
                    </Typography>
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
                                        edit={edit}
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
                open={open}
                handleClose={handleClose}
                data={editData}
                // setEducationData={setEducationData}
            />
        </Container>
    );
}

export default About;
