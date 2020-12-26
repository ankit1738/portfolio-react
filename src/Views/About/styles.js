import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            // marginTop: "100px",
            height: "calc(100vh - 100px)",
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
            display: "flex",
            alignItems: "center",
            marginTop: "64px",
            height: "100%",
        },
        aboutGrid: {
            "& div:first-child": {
                display: "flex",
                alignItems: "center",
            },
        },
        avatar: {
            objectFit: "cover",
            width: "370px",
            height: "400px",
            borderRadius: "4%",
            // border: "1px solid white",
            [theme.breakpoints.down(600)]: {
                width: "280px",
                height: "300px",
                margin: "0 auto",
            },
        },
        aboutContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
    })
);
