import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #a7ffb1;
  width: auto;
  > img {
    position: absolute;
    height: 100px;
    margin-top: 16px;
    margin-left: 16px;
  }
`;

export const NavBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  img {
    height: 36px;
  }
  a {
    display: flex;
    align-items: center;
    color: white;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.8;
  }
`;
