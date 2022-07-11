class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }
  set saldo(value) {
    this._saldo = value
  }

  sacar(value) {
    if (value < this._saldo) {
      return 'Operação Negada'
    }
    this._saldo = this._saldo - value
    return this._saldo
  }

  depositar(value) {
    this._saldo = this._saldo + value
    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, CartaoCredito) {
    super(agencia, numero, saldo)
    this.tipo = 'Conta corrente'
    this._CartaoCredito = CartaoCredito
  }
  get CartaoCredito() {
    return this._CartaoCredito
  }

  set CartaoCredito(value) {
    this._CartaoCredito = value
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'Conta Poupança'
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'Conta Universitária'
  }
  sacar(value) {
    if (value > 500) {
      return 'Operação negada'
    }
    return this.saldo - value
  }
}
