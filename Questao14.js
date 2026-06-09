class Aluno{
    #nota

    constructor(nota){
        this.nota = nota
    }

    get nota(){
        return this.#nota
    }

    set nota(valor){
        if(valor >= 0 && valor <= 10){
            this.#nota = valor
        }
    }

    static calcularMedia(n1, n2){
        return (n1 + n2) / 2
    }
}

let aluno = new Aluno(8)

console.log(aluno.nota)
console.log(Aluno.calcularMedia(8, 6))