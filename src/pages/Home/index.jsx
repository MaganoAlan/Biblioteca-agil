import React from "react";
import BookCard from "../../components/BookCard";

import Navegador from "../../components/Navegador";
import PageTitle from "../../components/PageTitle";
import SecondaryTitle from "../../components/SecondaryTitle";
import { Container } from "../../styles/Global";

const Books = JSON.parse(localStorage.getItem("Books")) || [];

function Home() {
  return (
    <Container>
      <PageTitle title="Biblioteca ágil" />
      <Navegador />
      <SecondaryTitle title="Livros" />
      {Books.map((li) => (
        <BookCard item={li} key={li.numero} />
      ))}
    </Container>
  );
}

export default Home;
