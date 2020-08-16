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
            padding: "0",
        },
        right: {
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
    })
);

export default useStyles;
