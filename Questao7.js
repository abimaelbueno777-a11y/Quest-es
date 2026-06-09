class Animal{
    constructor(nome, som){
        this.nome = nome
        this.som = som
    }

    emitirSom(){
        console.log(this.som)
    }
}

class Cachorro extends Animal{
    constructor(nome, som, raca){
        super(nome, som)
        this.raca = raca
    }

    emitirSom(){
        console.log(`${this.nome} faz ${this.som}`)
    }
}

let animal = new Animal("Animal", "Som")
let cachorro = new Cachorro("Rex", "Au Au", "Labrador")

animal.emitirSom()
cachorro.emitirSom()
