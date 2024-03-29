import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Heading from "../../components/styles/Headings";
import Button from "../../components/Form/Button";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import { Page } from "../../components/styles";
import { Link, withRouter } from "react-router-dom";

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
  street: Yup.string().required("The street is required.").min(5, "Too short"),
  city: Yup.string().required("The city is required.").min(4, "Too short"),
  zipcode: Yup.string()
  .required("The zipcode is required.")
  .min(5, "Too short").max(5, "Too long")
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

const Address = styled.h4`
  grid-column: 1/-1;
  font-size: 1.5rem; 
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
        street: "",
        city: "",
        state: "",
        zipcode: "",
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
              <Address>Please fill out your address </Address>
              <Field
                type="text"
                name="street"
                placeholder="Street"
                component={Input}
              />
              <Field
                type="text"
                name="city"
                placeholder="City"
                component={Input}
              />
              <Field
                type="text"
                name="state"
                placeholder="State"
                component={Input}
              />
              <Field
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                component={Input}
              />
              <ButtonWrapper>
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing Up" : null}
                type="submit"
              >
                Sign up
              </Button>
              </ButtonWrapper>
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
