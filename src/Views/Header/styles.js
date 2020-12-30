import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            background: "#18242b",
            color: "#ffffff",
            boxShadow: "none",
        },
        toolbar: {
            justifyContent: "space-between",
            padding: "0",
        },
        right: {
            float: "right",
            "& *": {
                color: "#ffffff",
                marginRight: theme.spacing(8),
            },
            "&:last-child": {
                marginRight: theme.spacing(-8),
            },
        },
        title: {
            flexGrow: 1,
        },
        adminButton: {
            backgroundColor: theme.orange,
            margin: "0 auto",
            display: "inline",
            "& span": {
                margin: "0 32px",
            },
        },
        ham: {
            color: theme.secondary,
            padding: "0px",
        },
        drawer: {
            "& .MuiPaper-root": {
                width: "50%",
                backgroundColor: theme.background,
                "& a": {
                    borderBottom: "2px solid " + theme.orange,
                    color: theme.secondary,
                    padding: "16px 24px",
                    margin: "0 12px",
                },
                "& button": {
                    margin: "16px 24px",

                    "& span": {
                        margin: "0 auto",
                    },
                },
            },
        },
    })
);

export default useStyles;
