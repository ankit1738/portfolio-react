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
import firebase from "./firebase";
import { RoleContext } from "./RoleContext";
import Project from "./Views/Projects/Project";

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
        background: "#18242b",
    });
    const [role, setRole] = useState("admin");

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <RoleContext.Provider value={{ role: role, setRole: setRole }}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/project/:id">
                                <Project />
                            </Route>
                            <Route path="/">
                                <Header />
                                <a id="about"></a>
                                <About />
                                <a id="education"></a>
                                <Education />
                                <a id="experience"></a>
                                <Experience />
                                <a id="skills"></a>
                                <Skills />
                                <a id="projects"></a>
                                <Projects />
                                <a id="contact"></a>
                                <Contact />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </RoleContext.Provider>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
