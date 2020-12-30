import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "40px",
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
        // input: {},
        form: {
            "& >div": {
                margin: "24px 0px",
                borderBottom: "1px solid white",
                "& label, div": {
                    color: "#ffffff",
                },
            },
            width: "80%",
            margin: "50px auto",
        },
        link: {
            color: theme.secondary,
            textDecoration: "none",
        },
        orange: {
            color: theme.orange,
        },
        aboutText: {
            whiteSpace: "pre-wrap",
            fontFamily: "Roboto, sans-serif",
        },
    })
);
