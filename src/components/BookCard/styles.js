import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  margin: 2% auto;
  width: 30%;
  padding: 2%;
  border-radius: 6px;
  box-shadow: 2px 3px 2px 1px #b5b5b5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    margin: 4%;
    padding: 5%;
    width: auto;
  }
`;

export const Li = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 4px;
`;
