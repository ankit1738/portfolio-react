import { createStyles, makeStyles, styled } from "@material-ui/core/styles";
import { Typography, LinearProgress, Tooltip } from "@material-ui/core";
export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: "100px",
        },
        heading: {
            // fontSize: "32px",
            color: theme.orange + `!important`,
        },
        divider: {
            height: "2px",
            background: theme.orange + `!important`,
            width: "100%",
        },
        titleGrid: {
            flex: 1,
        },
        headingGrid: {
            flex: 1,
            display: "flex",
            alignItems: "center",
        },
        contentContainer: {
            marginTop: "20px",
            color: theme.secondary,
        },
        marginTop: {
            margin: "48px 0",
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
        spacingRight: {
            paddingRight: "24px",
            width: "50%",
        },
        spacingLeft: {
            paddingLeft: "24px",
            width: "50%",
        },
    })
);

export const StyledProgress = styled(LinearProgress)((props) => ({
    background: "#ffffff",
    height: "14px",
    borderRadius: "4px",
    "& div": {
        background: props.theme.orange,
    },
}));

export const StyledTooltip = styled(Tooltip)((props) => ({
    color: props.theme.secondary,
}));
