import React, { Fragment, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@material-ui/core";
import firebase from "../../firebase";
import { useStyles as styles } from "./styles";
import { useHistory } from "react-router-dom";
import { RoleContext } from "../../RoleContext";

function AdminLogin() {
    const classes = styles();
    const history = useHistory();
    const { role, setRole } = useContext(RoleContext);

    return (
        <Fragment>
            <div className={classes.container}>
                <Formik
                    initialValues={{
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.password) {
                            errors.password = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values.password === "admin") {
                            setRole("admin");
                            history.push("/");
                        } else {
                            window.alert("Wrong Password");
                        }
                    }}>
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            <Field
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                                fullWidth
                            />
                            <br />
                            {isSubmitting && <LinearProgress />}
                            <br />
                            <div className={classes.centreButton}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => history.goBack()}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={submitForm}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Fragment>
    );
}

export default AdminLogin;
