import React from "react";
import Input from "../Input/Input"

const AuthForm = ({ values, handleChange, handleBlur, touched, errors }) => {
  return (
    <section className="w-[100%] flex flex-col gap-4">
      {Object.keys(values).map((inputName) => (
        <Input
          key={inputName}
          inputName={inputName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched[inputName]}
          errors={errors[inputName]}
        />
      ))}
    </section>
  );
};

export default AuthForm;
