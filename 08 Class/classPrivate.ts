class Produto {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

//new Produto("Teclado").nome;

class Teste {
    str: string = "Olá!";
    private str2: string = "Not working!";
}

let object = new Teste();
console.log(object.str);
//console.log(object.str2);

class Carro {
    private preco: number;

    constructor(preco: number) {
        this.preco = preco;
    }

    public descontoValorCarro() {
        return this.preco - (this.preco * 0.5);
    }

    public informarValorDesconto() {
        console.log("Valor do desconto é.....: R$ ", carro.descontoValorCarro());
    }
}

let carro = new Carro(10000);
carro.descontoValorCarro();
carro.informarValorDesconto();