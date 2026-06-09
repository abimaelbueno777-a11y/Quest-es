class Produto{
    static totalProdutos = 0

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade

        Produto.totalProdutos++
    }

    calcularValorEstoque(){
        return this.preco * this.quantidade
    }

    static obterTotal(){
        return Produto.totalProdutos
    }
}

let produto1 = new Produto("Mouse", 50, 2)
let produto2 = new Produto("Teclado", 100, 1)

console.log(produto1.calcularValorEstoque())
console.log(produto2.calcularValorEstoque())
console.log(Produto.obterTotal())