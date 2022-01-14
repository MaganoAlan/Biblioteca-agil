import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import SecondaryTitle from "../../components/SecondaryTitle";
import { Container, Button } from "./styles";

const InitBooks = [
  {
    numero: "0001",
    titulo: "Como fazer sentido e bater o martelo",
    autor: " Alexandro Aolchique",
    ano: "2017",
    status: "Disponível",
    emprestado: "ninguém",
  },
  {
    numero: "0002",
    titulo: "Sejamos todos feministas",
    autor: "Chimamanda Ngozi Adichie",
    ano: "2015",
    status: "Disponível",
    emprestado: "ninguém",
  },
  {
    numero: "0003",
    titulo: "Basquete 101",
    autor: "Hortência Marcari",
    ano: "2010",
    status: "Disponível",
    emprestado: "ninguém",
  },
];

function Login() {
  function handleLogin() {
    localStorage.setItem("Books", JSON.stringify(InitBooks));
    window.location.reload();
  }

  return (
    <Container>
      <PageTitle title="Bem vindo à Biblioteca ágil" />
      <SecondaryTitle title="Clique em entar para iniciar" />
      <Button onClick={handleLogin}>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="home">
          ENTRAR
        </Link>
      </Button>
    </Container>
  );
}

export default Login;
