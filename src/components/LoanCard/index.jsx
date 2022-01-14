import React, { useState } from "react";
import { Li } from "../BookCard/styles";
import Modal from "../Modal";

import { Button, Container } from "./styles";

function LoanCard(item, onClick) {
  const [hide, setHide] = useState(true);

  return (
    <Container>
      <Modal hidden={hide} bk={item.item} />
      <Li> Número: </Li> {item.item.numero}
      <Li>Título: </Li> {item.item.titulo}
      <Li> Autor:</Li>
      {item.item.autor}
      <Li> Ano: </Li> {item.item.ano}
      <Li> Status: </Li> {item.item.status}
      <Li> emprestado para:</Li> {item.item.emprestado}
      <Button onClick={() => setHide(!hide)}>RETIRAR</Button>
    </Container>
  );
}

export default LoanCard;
