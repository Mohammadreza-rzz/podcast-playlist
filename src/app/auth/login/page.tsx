import React from "react";
import AbstractShape from "@/ui/view/loginAbstractShape";
import { LoginForm } from "@/ui/view";

const LoginPage = () => {
  return (
    <section className="flex h-full">
      <div className="flex-1 bg-black-50">
        <AbstractShape />
      </div>
      <div className="flex-1 bg-blue-900">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
