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

//user.exibirInfos();

//const exibir = user.exibirInfos;
//exibir();

const exibir = function () {
  console.log(this.nome, this.email);
};
exibir();

const exibirInfo = exibir.bind(user);
exibirInfo();
