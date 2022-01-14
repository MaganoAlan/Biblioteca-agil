import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../../styles/Global";
import BackCard from "../../components/BackCard";
import PageTitle from "../../components/PageTitle";
import { Hover } from "../../components/Navegador/styles";

let Books = JSON.parse(localStorage.getItem("Books")) || [];

function Devolver() {
  return (
    <Container>
      <PageTitle title="Devolver livro" />
      <Hover>
        <Link
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
          to="/home"
        >
          Voltar
        </Link>
      </Hover>
      {Books && Books.map((i) => <BackCard item={i} key={i.numero} />)}
    </Container>
  );
}

export default Devolver;
