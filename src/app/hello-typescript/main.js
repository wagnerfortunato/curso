var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES06  ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 2015

class Matematica {
    soma(x, y){
        return x + y;
    }
}
