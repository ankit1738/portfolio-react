import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
        },
        heading: {
            // fontSize: "32px",
            color: theme.secondary,
        },
        divider: {
            height: "2px",
            background: theme.secondary,
            width: "100%",
        },
        headingGrid: {
            display: "flex",
            alignItems: "center",
        },
        contentContainer: {
            marginTop: "55px",
            color: theme.secondary,
        },
        img: {
            height: 140,
            objectFit: "fill",
        },
        allProject: {
            textAlign: "end",
            marginTop: "25px",
            "& a": {
                textDecoration: "none",
                color: theme.secondary,
                fontSize: "25px",
            },
        },
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        },
        leftMargin: {
            marginLeft: "16px",
        },
        centre: {
            textAlign: "center",
        },
    })
);
