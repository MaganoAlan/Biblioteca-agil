# Desafio Biblioteca ágil

Aplicação para biblioteca baseada no desafio da aceleradora ágil

## Funcionalidades

=> Retirar livro (emprestado);
=> Devolver livro;
=> Doar livro (Adiciona ao acervo virtual).

## Projeto

=> A linguagem escolhida foi o JavaScript com React devido a facilidade de uso dos HOOKS e Componentes;

=> Para este desafio escolhi utilizar o LocalStorage para persistir os dados como o desafio
pedia para iniciar com três livros pré determinados, uma solução foi implementar uma
função que ao entrar na aplicação armazena os três livros no localstorage apenas uma vez
ao entrar para que os dados possam ser manipulados pelas demais funcionalidades sem
que haja o reset para os três primeiros no localStorage;

=> Utilizei também styled-components para padronizar e o react-router-dom para criar a SPA.
