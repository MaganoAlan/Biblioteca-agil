import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 15%;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2%;
  margin: 2%;
  box-shadow: 2px 3px 2px 1px #b5b5b5;
  border-radius: 4px;
`;

export const Hover = styled.div`
  background: none;

  :hover {
    text-shadow: 4px 4px 2px #b5b5b5;
  }
`;
