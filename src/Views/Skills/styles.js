import { createStyles, makeStyles, styled } from "@material-ui/core/styles";
import { Typography, LinearProgress, Tooltip } from "@material-ui/core";
import { Timeline } from "@material-ui/lab";
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
        centerGrid: {
            display: "flex",
            alignItems: "center",
        },
        contentPadding: {
            padding: "32px 0",
        },
        marginTop: {
            marginTop: "48px",
        },
    })
);

export const StyledTypography = styled(Typography)((props) => ({
    color: props.theme.secondary,
}));

export const StyledTimeline = styled(Timeline)((props) => ({
    color: props.theme.secondary,
}));

export const StyledProgress = styled(LinearProgress)((props) => ({
    height: "10px",
    borderRadius: "4px",
    "& div": {
        background: "#5ab884",
    },
}));

export const StyledTooltip = styled(Tooltip)((props) => ({
    color: props.theme.secondary,
}));
