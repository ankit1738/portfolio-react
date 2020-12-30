import React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@material-ui/core";
import { useStyles as styles } from "./styles";
import { useHistory } from "react-router-dom";

function ProjectCard(props) {
    const classes = styles();
    const history = useHistory();

    // const handleProjectRedirection = (doc) => {
    //     console.log("Redirecting");
    //     history.push({
    //         pathname: "/project/" + doc.id,
    //         state: {
    //             projectTitle: doc.data.name,
    //             projectId: doc.id,
    //             projectDetailsId: doc.data.projectDetails,
    //         },
    //     });
    // };
    return (
        <Card /*onClick={() => handleProjectRedirection(props.doc)}*/>
            <CardActionArea>
                <CardMedia
                    className={classes.img}
                    component="img"
                    image={props.img ? `${props.img}` : `/angular_1.png`}
                />
                <CardContent>
                    <Typography
                        // color="black"
                        className={classes.centre}
                        gutterBottom
                        variant="h5"
                        component="h2">
                        {props.projectTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProjectCard;
