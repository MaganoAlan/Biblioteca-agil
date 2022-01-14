import React from "react";
import { Container, Hover } from "./styles";
import { Link } from "react-router-dom";

function Navegador() {
  return (
    <Container>
      <Hover>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
        >
          SAIR
        </Link>
      </Hover>
      <Hover>
        <Link
          to="/retirar"
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
        >
          RETIRAR
        </Link>
      </Hover>
      <Hover>
        <Link
          to="/devolver"
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
        >
          DEVOLVER
        </Link>
      </Hover>
      <Hover>
        <Link
          to="/doar"
          style={{ textDecoration: "none", color: "#428bca", fontWeight: 600 }}
        >
          DOAR
        </Link>
      </Hover>
    </Container>
  );
}

export default Navegador;
