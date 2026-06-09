class Pessoa{
    constructor(nome, idade, email){
        this.nome = nome
        this.idade = idade
        this.email = email
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} entre em contato por ${this.email}`)
    }

    fazerAniversario(){
        this.idade++
    }
}

let pessoa = new Pessoa("Abimael", 16, "abimaelbueno777@gmail.com")

pessoa.apresentar()
pessoa.fazerAniversario()
pessoa.apresentar()
pessoa.fazerAniversario()
pessoa.apresentar()