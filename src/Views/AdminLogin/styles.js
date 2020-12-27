import { createStyles, makeStyles, styled } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        form: {
            "& >div:first-child": {
                borderBottom: "1px solid white",
                "& label, div": {
                    color: "#ffffff",
                },
            },
            border: `2px solid` + theme.orange,
            borderRadius: "12px",
            width: "40%",
            margin: "0 auto",
            padding: "24px",
        },
        centreButton: {
            "& >button": {
                margin: "0 24px",
            },
            width: "fit-content",
            margin: "0 auto",
            display: "block",
        },
    })
);
