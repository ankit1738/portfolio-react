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
    })
);
