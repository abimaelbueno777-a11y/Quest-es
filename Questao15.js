class ContaBancaria{
    #saldo

    constructor(saldo){
        this.#saldo = saldo
    }

    depositar(valor){
        this.#saldo += valor
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
        }else{
            console.log("Saldo insuficiente")
        }
    }

    get saldo(){
        return this.#saldo
    }

    static converterParaDolarCanadense(valor){
        return valor / 4
    }
}

let conta = new ContaBancaria(100)

conta.depositar(50)
conta.sacar(30)

console.log(conta.saldo)

console.log(
    ContaBancaria.converterParaDolarCanadense(100)
)