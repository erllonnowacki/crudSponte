import { Form } from "formik";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
export const THead = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TBody = styled.tbody`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  @media (max-width: 768px) {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
`;
export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  @media (max-width: 768px) {
    display: block;
    text-align: right;
    &:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
    &:only-child:before {
      content: none;
      display: none;
    }
  }
`;
export const THeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CenteredForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  margin: 10px;
`;

export const EditButton = styled.div`
  background-color: yellow;
  color: white;
  width: 20px;
`;
