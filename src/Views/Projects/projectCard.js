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

function ProjectCard(props) {
    const classes = styles();

    return (
        <Card>
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
                        {props.projectName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProjectCard;
