let contaController = new ContaController();
let clienteController = new ClienteController();
let clientes = new Clientes();

contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cliente = new Cliente ('Louise', '2222222222', c2);
clientes.inserir(cliente);
console.log(clientes.listar);
console.log(clientes.pesquisar('2222222222'));
clientes.remover('2222222222');
console.log(clientes.listar());