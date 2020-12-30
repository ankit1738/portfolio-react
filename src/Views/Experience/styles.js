import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
        },
        heading: {
            // fontSize: "32px",
            color: theme.orange + `!important`,
        },
        divider: {
            height: "2px",
            background: theme.orange + `!important`,
            width: "100%",
        },

        contentContainer: {
            marginTop: "20px",
        },
        centerGrid: {
            display: "flex",
            alignItems: "center",
        },
        contentPadding: {
            padding: "32px 0",
        },
        desc: {
            marginTop: "12px",
            "& p": {
                whiteSpace: "pre-wrap",
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
        title: {
            color: theme.orange,
        },
    })
);
