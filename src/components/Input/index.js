import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

const InputField = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  font-size: 16px;
  min-width: 300px;
  max-width: 500px;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 50%;
`;

const Label = styled.label`
  text-transform: capitalize;
`;

const Required = styled.span`
  color: red;
`;

export const Input = ({ name, type = "", label, required, ...props }) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <Required>*</Required>}
      </Label>
      <Field as={InputField} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={Error} />
    </Container>
  );
};
