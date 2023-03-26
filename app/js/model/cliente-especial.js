class ClienteEspecial extends Cliente {
    _dependentes;
    constructor(nome, cpf, conta, dependentes) {
        super(nome, cpf, conta);
        this._dependentes = this.dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const index = this.dependentes.findIndex(cliente => cliente.cpf === cpf);
        if (index !== -1) {
            this.dependentes.splice(index, 1);
        }
    }
}
