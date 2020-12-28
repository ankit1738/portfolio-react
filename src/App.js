import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./Views/Header/index";
import About from "./Views/About/index";
import Education from "./Views/Education/index";
import Experience from "./Views/Experience/index";
import Skills from "./Views/Skills/index";
import Projects from "./Views/Projects/index";
import Contact from "./Views/Contact/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RoleContext } from "./RoleContext";
import Project from "./Views/Projects/Project";
import AdminLogin from "./Views/AdminLogin/index";
import AddEditProject from "./Views/Projects/Project/addEditProjectDetails.js";
import Fade from "react-reveal/Fade";
import firebase from "firebase";

function App() {
    const theme = createMuiTheme({
        primary: "",
        secondary: "#ffffff",
        orange: "#fc7708",
        background: "#18242b",
        overrides: {
            MuiButton: {
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: "#c95400",
                    },
                    backgroundColor: "#fc7708",
                },
            },
        },
    });
    const [role, setRole] = useState("user");

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("Logged In");
            setRole("admin");
        } else {
            console.log("Logged Out");
            setRole("user");
        }
    });

    // useEffect(() => {}, []);
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <RoleContext.Provider value={{ role: role, setRole: setRole }}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/project/:id">
                                <Project />
                            </Route>
                            <Route path="/adminLogin">
                                <AdminLogin />
                            </Route>
                            <Route path="/addEditProjectDetails">
                                <AddEditProject />
                            </Route>
                            <Route path="/">
                                <Header />
                                <a id="about"></a>
                                <Fade top>
                                    <About />
                                </Fade>
                                <a id="education"></a>
                                <Fade left>
                                    <Education />
                                </Fade>
                                <a id="experience"></a>
                                <Fade right>
                                    <Experience />
                                </Fade>
                                <a id="skills"></a>
                                <Fade left>
                                    <Skills />
                                </Fade>
                                <a id="projects"></a>
                                <Fade right>
                                    <Projects />
                                </Fade>
                                <a id="contact"></a>
                                <Fade left>
                                    <Contact />
                                </Fade>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </RoleContext.Provider>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
