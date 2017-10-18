var Produto = /** @class */ (function () {
    function Produto(nome) {
        this.nome = nome;
    }
    return Produto;
}());
//new Produto("Teclado").nome;
var Teste = /** @class */ (function () {
    function Teste() {
        this.str = "Olá!";
        this.str2 = "Not working!";
    }
    return Teste;
}());
var object = new Teste();
console.log(object.str);
//console.log(object.str2);
var Carro = /** @class */ (function () {
    function Carro(preco) {
        this.preco = preco;
    }
    Carro.prototype.descontoValorCarro = function () {
        return this.preco - (this.preco * 0.5);
    };
    Carro.prototype.informarValorDesconto = function () {
        console.log("Valor do desconto é.....: R$ ", carro.descontoValorCarro());
    };
    return Carro;
}());
var carro = new Carro(10000);
carro.descontoValorCarro();
carro.informarValorDesconto();
//# sourceMappingURL=classPrivate.js.map