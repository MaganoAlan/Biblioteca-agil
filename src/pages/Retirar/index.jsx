import React from "react";
import { Link } from "react-router-dom";
import LoanCard from "../../components/LoanCard";
import { Hover } from "../../components/Navegador/styles";

import PageTitle from "../../components/PageTitle";

import { Container } from "../../styles/Global";

let Books = JSON.parse(localStorage.getItem("Books")) || [];

function Retirar() {
  return (
    <Container>
      <PageTitle title="Retirar Livro" />
      <Hover>
        <Link
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
          to="/home"
        >
          Voltar
        </Link>
      </Hover>
      {Books && Books.map((i) => <LoanCard item={i} key={i.numero} />)}
    </Container>
  );
}

export default Retirar;
