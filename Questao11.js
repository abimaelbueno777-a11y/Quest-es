class Livro{
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `Livro: ${this.nome}`
    }
}

class Filme{
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `Filme: ${this.nome}`
    }
}

class Musica{
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `Música: ${this.nome}`
    }
}

let itens = [
    new Livro("Dom Casmurro"),
    new Filme("Interestelar"),
    new Musica("Numb")
]

itens.forEach(item => {
    console.log(item.toString())
})