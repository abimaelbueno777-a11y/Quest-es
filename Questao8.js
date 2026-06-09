class Funcionario{
    constructor(nome, salario, cargo){
        this.nome = nome
        this.salario = salario
        this.cargo = cargo
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, cargo, bonus){
        super(nome, salario, cargo)
        this.bonus = bonus
        this.equipe = []
    }

    adicionarMembro(func){
        this.equipe.push(func)
    }

    calcularSalarioTotal(){
        return this.salario + this.bonus
    }
}

let gerente = new Gerente("Abimael", 5000, "Gerente", 1000)

gerente.adicionarMembro("João")
gerente.adicionarMembro("Maria")

console.log(gerente.equipe)
console.log(gerente.calcularSalarioTotal())