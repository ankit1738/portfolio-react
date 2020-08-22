import { createStyles, makeStyles, styled } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
        },
        heading: {
            textAlign: "center",
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
            marginTop: "20px",
            color: theme.secondary,
        },
        icons: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            marginTop: "48px",
            "& > *": {
                textDecoration: "none",
                color: theme.secondary,
                padding: "15px",
            },
        },
        backToTop: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px 0",
            "& span": {
                cursor: "pointer",
                textDecoration: "underline",
            },
        },
    })
);
