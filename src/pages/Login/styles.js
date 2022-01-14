import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #428bca;

  @media (max-width: 480px) {
    margin: 4%;
    padding: 5%;
    width: auto;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  margin-top: 3%;
  padding: 6px;
  border: none;
  background-color: #4dd4ef;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  :hover {
    box-shadow: 1px 1px 1px gray;
    background-color: #4dffff;
  }
`;
