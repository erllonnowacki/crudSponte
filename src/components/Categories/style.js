import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 14px;
  }

  label {
    font-size: 14px;

    span {
      font-size: 12px;
      margin-left: 8px;
    }

    input {
      padding: 8px;
      border-radius: 8px;
      border: 1px solid;
      outline: none;
      font-size: 16px;
      width: 90%;
      min-width: 200px;
    }
  }
`;

export const Categorie = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`;
