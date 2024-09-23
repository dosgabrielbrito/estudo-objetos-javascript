import User from './User.js';

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(nomeEstudante, nomeCurso) {
    return `${nomeEstudante} foi aprovado em ${nomeCurso}. Responsável: ${this.nome}`;
  }
}
