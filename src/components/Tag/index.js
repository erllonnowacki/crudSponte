import React from "react";
import { FiX } from "react-icons/fi";

import { Container } from "./style";

function Tag(props) {
  const { label, onClick } = props;

  return (
    <Container>
      <span>{label}</span>
      <button type="button" onClick={onClick}>
        <FiX />
      </button>
    </Container>
  );
}

export default Tag;
