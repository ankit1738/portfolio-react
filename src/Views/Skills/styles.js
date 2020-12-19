import { createStyles, makeStyles, styled } from "@material-ui/core/styles";
import { Typography, LinearProgress, Tooltip } from "@material-ui/core";
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
        headingGrid: {
            display: "flex",
            alignItems: "center",
        },
        contentContainer: {
            marginTop: "20px",
            color: theme.secondary,
        },
        marginTop: {
            marginTop: "48px",
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

export const StyledProgress = styled(LinearProgress)((props) => ({
    background: "#ffffff",
    height: "14px",
    borderRadius: "4px",
    "& div": {
        background: "#5ab884",
    },
}));

export const StyledTooltip = styled(Tooltip)((props) => ({
    color: props.theme.secondary,
}));
