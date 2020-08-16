import React, { Fragment } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./Views/Header/index";
import About from "./Views/About/index";
import Education from "./Views/Education/index";
import Experience from "./Views/Experience/index";

function App() {
    const theme = createMuiTheme({
        primary: "",
        secondary: "#ffffff",
        background: "#18242b",
    });
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Header />
                <About />
                <a id="education"></a>
                <Education />
                <a id="experience"></a>
                <Experience />
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
