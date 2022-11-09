import React from "react";
import Main from "../template/Main";

const Home = (props) =>
    <Main icon="Home" title="inicio"
        subtitle="Segundo Projeto do capitulo de React.">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção
            de um cadastro desenvolvido em React!</p>
    </Main>


export default Home