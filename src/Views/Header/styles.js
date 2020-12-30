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
    })
);

export default useStyles;
