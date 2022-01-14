import React, { useState } from "react";

import { Button, Container, InputNum, InputTxt } from "./styles";

let Book = JSON.parse(localStorage.getItem("Books")) || [];

function InputCard() {
  const [numero, setNumero] = useState();
  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [ano, setAno] = useState();

  function Doar() {
    const book = {
      numero: numero,
      titulo: titulo,
      autor: autor,
      ano: ano,
      status: "Disponível",
      emprestado: "ninguém",
    };

    Book.push(book);
    localStorage.setItem("Books", JSON.stringify(Book));

    window.alert(`Livro ${titulo} Doado com sucesso!`);
    window.location.reload();
  }

  return (
    <Container>
      Número:
      <InputNum
        value={numero}
        onChange={(n) => setNumero(n.target.value)}
        type="number"
      />
      Título:
      <InputTxt
        value={titulo}
        onChange={(t) => setTitulo(t.target.value)}
        type="text"
      />
      Autor:
      <InputTxt
        value={autor}
        onChange={(t) => setAutor(t.target.value)}
        type="text"
      />
      Ano:
      <InputNum
        type="number"
        value={ano}
        onChange={(n) => setAno(n.target.value)}
      />
      <Button onClick={() => Doar()}>DOAR 💖</Button>
    </Container>
  );
}

export default InputCard;
