class Veiculo{
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
        this.velocidade = 0
    }

    acelerar(){
        this.velocidade += 10
    }

    frear(){
        this.velocidade -= 10
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, combustivel, litrosNoTanque){
        super(marca, modelo)
        this.combustivel = combustivel
        this.litrosNoTanque = litrosNoTanque
    }
}

class CarroEletrico extends Carro{
    constructor(marca, modelo, bateriaKwh){
        super(marca, modelo, "Elétrico", 0)
        this.bateriaKwh = bateriaKwh
    }

    acelerar(){
        this.velocidade += 10
        this.bateriaKwh -= 1
    }
}

let carro = new CarroEletrico("Tesla", "Model S", 100)

carro.acelerar()

console.log(carro.velocidade)
console.log(carro.bateriaKwh)