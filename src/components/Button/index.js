import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.color || "#007bff"};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonWithLabel = ({ label, onClick, color, type }) => {
  return (
    <Button color={color} onClick={onClick} type={type}>
      {label}
    </Button>
  );
};

export default ButtonWithLabel;
