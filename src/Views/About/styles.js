import { createStyles, makeStyles, styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
            marginTop: "64px",
        },
        aboutGrid: {
            "& div:first-child": {
                display: "flex",
                alignItems: "center",
            },
        },
        avatar: {
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid white",
        },
    })
);

export const StyledTypography = styled(Typography)((props) => ({
    color: props.theme.secondary,
}));
