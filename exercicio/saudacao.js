"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    saudacao(nome) {
        return "Olá" + nome;
    }
}
