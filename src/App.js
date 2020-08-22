import React, { Fragment } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./Views/Header/index";
import About from "./Views/About/index";
import Education from "./Views/Education/index";
import Experience from "./Views/Experience/index";
import Skills from "./Views/Skills/index";
import Projects from "./Views/Projects/index";
import Contact from "./Views/Contact/index";

import { BrowserRouter } from "react-router-dom";

function App() {
    console.log(process.env);
    const theme = createMuiTheme({
        primary: "",
        secondary: "#ffffff",
        background: "#18242b",
    });
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
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
                </BrowserRouter>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
