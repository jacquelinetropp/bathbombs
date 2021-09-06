import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Heading from "../../components/styles/Headings";
import Message from "../../components/styles/Message";
import Button from "../../components/Form/Button";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import { MessageWrapper, Page } from "../../components/styles";
import { Link, withRouter} from "react-router-dom";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "Too short"),
});

const Main = styled.div`
  width: 70%;
  margin: 15rem auto 0 auto;
  height: 80vh;
  text-align: center;
`;

const FormWrapper = styled(Form)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const ButtonWrapper = styled.div`
  grid-column: 1/-1;
`;

const SignUp = ({ signUp, loading, error, history }) => {
  //   useEffect(() => {
  //     return () => {
  //       cleanUp();
  //     };
  //   }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values) => {
        await signUp(values);
        history.push("/");
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Page>
          <Main>
            <Heading color="black" size="h1">
              Register Your Account
            </Heading>

            <FormWrapper>
              <Field
                type="text"
                name="firstName"
                placeholder="Your first name..."
                component={Input}
              />
              <Field
                type="text"
                name="lastName"
                placeholder="Your last name..."
                component={Input}
              />
              <Field
                type="email"
                name="email"
                placeholder="Your email..."
                component={Input}
              />
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing Up" : null}
                type="submit"
              >
                Sign up
              </Button>
            </FormWrapper>
            <Link to="/login">Have an account? Login Here!</Link>
          </Main>
        </Page>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
  error: user.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  //   cleanUp: actions.clean,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
