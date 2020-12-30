import { styled } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import { Timeline } from "@material-ui/lab";

export const StyledTypography = styled(Typography)((props) => ({
    color: props.theme.secondary,
}));

export const StyledTimeline = styled(Timeline)((props) => ({
    color: props.theme.secondary,
    padding: "0",
}));
