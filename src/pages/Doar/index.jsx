import React from "react";
import { Link } from "react-router-dom";
import InputCard from "../../components/InputCard";
import { Hover } from "../../components/Navegador/styles";
import PageTitle from "../../components/PageTitle";
import SecondaryTitle from "../../components/SecondaryTitle";

import { Container } from "../../styles/Global";

function Doar() {
  return (
    <Container>
      <PageTitle title="Doar Livro" />
      <Hover>
        <Link
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
          to="/home"
        >
          Voltar
        </Link>
      </Hover>
      <SecondaryTitle title="Informações do livro" />
      <InputCard />
    </Container>
  );
}

export default Doar;
