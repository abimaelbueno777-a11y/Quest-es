class Pagamento{
    constructor(valor){
        this.valor = valor
    }

    processar(){
        console.log("Método processar deve ser implementado")
    }
}

class CartaoCredito extends Pagamento{
    constructor(valor, parcelamento){
        super(valor)
        this.parcelamento = parcelamento
    }

    processar(){
        console.log(
            `Pagamento de R$${this.valor} no cartão em ${this.parcelamento}x`
        )
    }
}

class Pix extends Pagamento{
    constructor(valor, chavePix){
        super(valor)
        this.chavePix = chavePix
    }

    processar(){
        console.log(
            `Pagamento Pix de R$${this.valor} para ${this.chavePix}`
        )
    }
}

class Boleto extends Pagamento{
    constructor(valor, codigoDeBarras){
        super(valor)
        this.codigoDeBarras = codigoDeBarras
    }

    processar(){
        console.log(
            `Pagamento por boleto de R$${this.valor}. Código: ${this.codigoDeBarras}`
        )
    }
}

function processarTodos(pagamentos){
    for(let pagamento of pagamentos){
        pagamento.processar()
    }
}

let pagamentos = [
    new CartaoCredito(100, 2),
    new Pix(50, "abimael@email.com"),
    new Boleto(200, "123456789")
]

processarTodos(pagamentos)