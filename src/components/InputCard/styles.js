import styled from "styled-components";

const Container = styled.div`
  background-color: aliceblue;
  margin: 2% auto;
  width: 20%;
  padding: 2%;
  border-radius: 6px;
  box-shadow: 2px 3px 2px 1px #b5b5b5;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 480px) {
    margin: 4%;
    padding: 5%;
    width: auto;
  }
`;

const InputTxt = styled.input``;

const InputNum = styled.input``;

const Button = styled.button`
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

export { Container, InputTxt, InputNum, Button };
