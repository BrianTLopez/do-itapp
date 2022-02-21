import React from "react";
import { OuterCog, Middle, Main } from "../images/imageList"
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-form fadeIn">
        <div className="top-panel">
          <div className="image-container">
            <img className="img1 rotate" src={OuterCog} ></img>
            <img className="img2 rotateReverse" src={Middle} ></img>
            <img className="img3 rotate" src={Main} ></img>
          </div>
        </div>
        <div className="bottom-panel">
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={async (values) => {
              alert(JSON.stringify(values, null, 2));
              navigate('/app')
            }}
          >
            <Form>
              <Field id="userName" name="userName" placeholder="Username..." />
              <Field id="password" name="password" placeholder="password..." />
              <div className="button-container">
                <button type="submit">REGISTER</button>
                <button type="submit">LOGIN</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
