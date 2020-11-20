import React from "react";
//SEO
import { Helmet } from "react-helmet";

//COMPONENTS
import LoginForm from "../components/loginForm";

export default function loginPage() {
  return (
    <>
      <Helmet>
        <title>Sign In | Amazon Clone</title>
      </Helmet>
      <div className="loginPage">
        <LoginForm />
      </div>
    </>
  );
}
