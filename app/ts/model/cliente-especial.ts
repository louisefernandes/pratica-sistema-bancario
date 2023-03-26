class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;
  
    constructor(nome: string, cpf: string, conta: Conta, dependentes: Array<Cliente>) {
      super(nome, cpf, conta);
      this._dependentes = this.dependentes;
    }
  
    get dependentes(): Array<Cliente> {
      return this._dependentes;
    }
  
    adicionarDependente(dependente: Cliente): void {
      this._dependentes.push(dependente);
    }
  
    removerDependente(cpf: string) {
      const index = this.dependentes.findIndex(cliente => cliente.cpf === cpf);
      if (index !== -1) {
          this.dependentes.splice(index, 1);
      }
    }
  }