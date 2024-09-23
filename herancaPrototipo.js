const user = {
  nome: 'Gabriel',
  email: 'gabriel@email.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: 'Mariana',
  email: 'mariana@email.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  criarCurso: function () {
    console.log('Curso Criado!');
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
