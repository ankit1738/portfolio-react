import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
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
            width: "280px",
            height: "300px",
            borderRadius: "4%",
            // border: "1px solid white",
        },
    })
);
