class Endereco{
    constructor(rua, cidade, cep){
        this.rua = rua
        this.cidade = cidade
        this.cep = cep
    }
}

class Contato{
    constructor(telefone, email){
        this.telefone = telefone
        this.email = email
    }
}

class PerfilUsuario{
    constructor(nome, endereco, contato){
        this.nome = nome
        this.endereco = endereco
        this.contato = contato
    }

    exibirPerfil(){
        console.log(`
Nome: ${this.nome}
Rua: ${this.endereco.rua}
Cidade: ${this.endereco.cidade}
CEP: ${this.endereco.cep}
Telefone: ${this.contato.telefone}
Email: ${this.contato.email}
`)
    }
}

let endereco = new Endereco("Rua A", "Campo Grande", "79000-000")
let contato = new Contato("67999999999", "teste@gmail.com")

let perfil = new PerfilUsuario("Abimael", endereco, contato)

perfil.exibirPerfil()