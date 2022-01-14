import React, { useState } from "react";

import { Container, Button } from "./styles";
import { Li } from "../BookCard/styles";
import BackModal from "../BackModal";

function BackCard(item, onclick) {
  const [hide, setHide] = useState(true);
  return (
    <Container>
      <BackModal hidden={hide} bk={item.item} />
      <Li> Número: </Li> {item.item.numero}
      <Li>Título: </Li> {item.item.titulo}
      <Li> Autor:</Li>
      {item.item.autor}
      <Li> Ano: </Li> {item.item.ano}
      <Li> Status: </Li> {item.item.status}
      <Li> emprestado para:</Li> {item.item.emprestado}
      <Button onClick={() => setHide(!hide)}>DEVOLVER</Button>
    </Container>
  );
}

export default BackCard;
