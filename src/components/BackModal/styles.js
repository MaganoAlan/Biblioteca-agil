import styled from "styled-components";

export const Modalcontainer = styled.div`
  width: min-content;
  height: min-content;
`;

export const ModalP = styled.p`
  min-width: 190%;
  font-weight: 600;
  color: red;
`;

export const ModalButton = styled.button`
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
