class Usuario{
    #senha

    constructor(nome, senha){
        this.nome = nome
        this.#senha = senha
    }

    autenticar(senha){
        return senha === this.#senha
    }

    alterarSenha(senhaAtual, novaSenha){
        if(senhaAtual === this.#senha){
            this.#senha = novaSenha
            console.log("Senha alterada")
        }else{
            console.log("Senha incorreta")
        }
    }
}

let usuario = new Usuario("Abimael", "123")

console.log(usuario.autenticar("123"))

usuario.alterarSenha("123", "456")

console.log(usuario.autenticar("456"))