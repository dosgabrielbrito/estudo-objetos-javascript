import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Juliana', 'juliana@email.com', '2024-01-01');
const novoAdmin = new Admin('Gabriel', 'gabriel@email.com', '2024-01-01');
const novoDocente = new Docente('Helen', 'helen@email.com', '2024-01-01');

console.log(novoUser.exibirInfos());
console.log(novoAdmin.exibirInfos());
console.log(novoDocente.exibirInfos());

const dadosFicticios = User.infosGenericas('Cassio', 'cassio@email.com');
console.log(dadosFicticios);
