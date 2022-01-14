import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalButton, Modalcontainer, ModalInput } from "./styles";

let Books = JSON.parse(localStorage.getItem("Books")) || [];

function Modal(hidden, bk) {
  const navigate = useNavigate();

  let item = hidden.bk;
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState();
  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [ano, setAno] = useState();

  useEffect(() => {
    setNumero(item.numero);
    setTitulo(item.titulo);
    setAutor(item.autor);
    setAno(item.ano);
  }, [item]);

  const handleClick = () => {
    let editbook = {
      numero: numero,
      titulo: titulo,
      autor: autor,
      ano: ano,
      status: "Indisponível",
      emprestado: nome,
    };
    //buscando o código do produto a ser editado
    function checkIndex(index: any) {
      return index.numero === `${numero}`;
    }
    //chamada da função parar encontrar o index do produto a ser editado
    const ind = Books.findIndex(checkIndex);

    //console.log(`esse é o ind antes ${ind}`);
    ind === -1
      ? window.alert("Código inexistente")
      : Books.splice(`${ind}`, 1, editbook);
    //salvando novo array no local storage
    localStorage.setItem("Books", JSON.stringify(Books));
    //log o objeto editado
    //console.log(`Livros após empréstimo${JSON.stringify(Books)}`);
    // retorno visual ao usuário
    window.alert(`Livro ${titulo} emprestado com sucesso!`);
    //atualização da página
    window.location.reload();
    navigate("home");
  };

  return (
    <Modalcontainer hidden={hidden.hidden}>
      Informe seu nome:
      <ModalInput
        type="text"
        value={nome}
        onChange={(t) => setNome(t.target.value)}
      />
      <ModalButton onClick={handleClick}>CONFIRMAR</ModalButton>
    </Modalcontainer>
  );
}

export default Modal;
