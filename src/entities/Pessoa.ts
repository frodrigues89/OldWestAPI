import { Altura, Peso, FaixaEtaria, Origem, Sexo, Sexualidade } from "./enums";
  

export default class Pessoa{
    id : number;
    nome : string;
    idade : number;
    altura: Altura;
    peso: Peso;
    faixaEtaria: FaixaEtaria;
    origem: Origem;
    sexo: Sexo;
    sexualidade: Sexualidade;
    foto: string;

    
    constructor(
        id: number,
        nome: string,
        idade: number,
        altura: Altura,
        peso: Peso,
        faixaEtaria: FaixaEtaria,
        origem: Origem,
        sexo: Sexo,
        sexualidade: Sexualidade,
        foto: string
    ) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.faixaEtaria = faixaEtaria;
        this.origem = origem;
        this.sexo = sexo;
        this.sexualidade = sexualidade;
        this.foto = foto;
    }
}