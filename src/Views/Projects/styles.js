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
    })
);
