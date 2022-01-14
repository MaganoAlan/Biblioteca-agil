import React from "react";

import { Container, Li } from "./styles";

function BookCard(item) {
  return (
    <Container>
      <Li> Número: </Li> {item.item.numero}
      <Li>Título: </Li> {item.item.titulo}
      <Li> Autor:</Li>
      {item.item.autor}
      <Li> Ano: </Li> {item.item.ano}
      <Li> Status: </Li> {item.item.status}
      <Li> emprestado para:</Li> {item.item.emprestado}
    </Container>
  );
}

export default BookCard;
