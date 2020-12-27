import React, { Fragment, createContext, useState } from "react";
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

function App() {
    // React.useEffect(() => {
    //     window.addEventListener("resize", resize);
    //     return () => window.removeEventListener("resize", resize);
    // });

    // const resize = () => {
    //     console.log(window.innerWidth);
    // };
    // console.log("FIrebase");
    // firebase.db
    //     .collection("About")
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.data() + " " + doc.id);
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
    const theme = createMuiTheme({
        primary: "",
        secondary: "#ffffff",
        orange: "#fc7708",
        background: "#18242b",
    });
    const [role, setRole] = useState("user");

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
