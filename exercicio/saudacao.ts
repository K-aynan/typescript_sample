class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string,  renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }
  
  saudacao(nome: string): string {
    return "Olá" + nome;
  }
}