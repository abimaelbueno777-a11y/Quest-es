class Pagamento{
    constructor(valor){
        this.valor = valor
    }

    processar(){
        throw new Error("Método abstrato")
    }
}

class CartaoCredito extends Pagamento{
    constructor(valor, parcelamento){
        super(valor)
        this.parcelamento = parcelamento
    }

    processar(){
        console.log(`Pagamento de ${this.valor} em ${this.parcelamento}x`)
    }
}

class Pix extends Pagamento{
    constructor(valor, chavePix){
        super(valor)
        this.chavePix = chavePix
    }

    processar(){
        console.log(`Pix enviado para ${this.chavePix}`)
    }
}

class Boleto extends Pagamento{
    constructor(valor, codigoDeBarras){
        super(valor)
        this.codigoDeBarras = codigoDeBarras
    }

    processar(){
        console.log(`Boleto ${this.codigoDeBarras}`)
    }
}

function processarTodos(pagamentos){
    pagamentos.forEach(pagamento => {
        pagamento.processar()
    })
}

let pagamentos = [
    new CartaoCredito(100, 2),
    new Pix(50, "email@gmail.com"),
    new Boleto(200, "123456")
]

processarTodos(pagamentos)