class ContaBancaria{
    constructor(titular, saldo, numeroConta){
        this.titular = titular
        this.saldo = saldo
        this.numeroConta = numeroConta
    }

    depositar(valor){
        return this.saldo += valor
    }

    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor
        }

        else {console.log("TA LISO KKKKK")}
    }

    exibirSaldo(){
        console.log(`Seu saldo é ${this.saldo}`)
    }
}

let contaBancaria = new ContaBancaria("Abimael Siebra Bueno", 10, 121209)

contaBancaria.exibirSaldo()
contaBancaria.sacar(20)
contaBancaria.exibirSaldo()
contaBancaria.depositar(10)
contaBancaria.exibirSaldo()
contaBancaria.sacar(20)


