export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, email, nascimento, role, ativo = true) {
    (this.#nome = nome),
      (this.#email = email),
      (this.#nascimento = nascimento),
      (this.#role = role || 'estudante'),
      (this.#ativo = ativo);
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  //   exibirInfos() {
  //     return `${this.nome}, ${this.email}`;
  //   }

  exibirInfos() {
    if (this.role === 'estudante') {
      return `Estudante: ${this.nome}`;
    }
    if (this.role === 'admin') {
      return `[ADMIN] Nome: ${this.nome}. Email: ${this.email}`;
    }
    if (this.role === 'docente') {
      return `[DOCENTE] Nome: ${this.nome}. Email: ${this.email}`;
    }
  }

  static infosGenericas(nome, email) {
    return `[TESTE] Nome: ${nome}. Email: ${email}`;
  }
}
