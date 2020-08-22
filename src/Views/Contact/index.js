import React from "react";
import { Container, Divider, Grid, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useStyles as styles } from "./styles";
import { StyledTypography as Typography } from "../../styles";

function Contact() {
    const classes = styles();
    const backToTop = () => {
        console.log("here");
        window.scrollTo(0, 0);
    };
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item md={5} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item md={2}>
                    <Typography variant="h4" className={classes.heading}>
                        Reach Out
                    </Typography>
                </Grid>
                <Grid item md={5} className={classes.headingGrid}>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Grid container justify="center" spacing={10}>
                    {/* <Grid item md={10}>
                        ankit1738@gmail.com
                    </Grid> */}
                    <Grid item md={10} className={classes.icons}>
                        <Link href="#">
                            <LinkedInIcon style={{ fontSize: 50 }} />
                        </Link>
                        <Link href="#">
                            <GitHubIcon style={{ fontSize: 50 }} />
                        </Link>

                        <Link href="#">
                            <FacebookIcon style={{ fontSize: 50 }} />
                        </Link>

                        <Link href="#">
                            <InstagramIcon style={{ fontSize: 50 }} />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item md={10} className={classes.backToTop}>
                        <span onClick={backToTop}>Back to top</span>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Contact;
