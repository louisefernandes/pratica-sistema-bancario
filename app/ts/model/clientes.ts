class Clientes {
    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const index = this.clientes.findIndex((cliente) => cliente.cpf === cpf);
        if (index != -1) {
            this.clientes.splice(index, 1);
        }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
      }

}
