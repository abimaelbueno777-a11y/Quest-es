class Forma{
    calcularArea(){
        throw new Error("Método abstrato")
    }
}

class Circulo extends Forma{
    constructor(raio){
        super()
        this.raio = raio
    }

    calcularArea(){
        return Math.PI * this.raio ** 2
    }
}

class Retangulo extends Forma{
    constructor(base, altura){
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}

class Triangulo extends Forma{
    constructor(base, altura){
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return (this.base * this.altura) / 2
    }
}

let formas = [
    new Circulo(5),
    new Retangulo(10, 4),
    new Triangulo(8, 6)
]

formas.forEach(forma => {
    console.log(forma.calcularArea())
})