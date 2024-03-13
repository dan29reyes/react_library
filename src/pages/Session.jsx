import React, { useState } from "react";
import LoginComponent from "../components/login";
import RegisterComponent from "../components/register";
import { Helmet } from "react-helmet";

export default function Session() {
  const [renderedComponent, setRenderedComponent] = useState("login");

  return (
    <div className="flex flex-col h-screen bg-violet-500 items-center justify-center space-y-4 py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {renderedComponent === "login" ? "Inicio de Sesión" : "Crear Cuenta"}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-5xl text-slate-100 animate-pulse">React Library</h1>
      {renderedComponent === "login" ? (
        <LoginComponent changeComponent={() => setRenderedComponent("register")}/>
      ) : (
        <RegisterComponent changeComponent={() => setRenderedComponent("login")}/>
      )}
    </div>
  );
}
