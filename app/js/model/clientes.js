class Clientes {
    clientes;
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const index = this.clientes.findIndex((cliente) => cliente.cpf === cpf);
        if (index != -1) {
            this.clientes.splice(index, 1);
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }
}
