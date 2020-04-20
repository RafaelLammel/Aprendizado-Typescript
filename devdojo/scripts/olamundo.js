var p = document.createElement('p');
var ola = "DevDojo";
p.textContent = ola;
document.body.appendChild(p);
//Tipos:
var num = 10;
var bool = true;
var str = "A beautiful message";
var str2 = 'A beautiful message';
var str3 = "" + str2;
console.log(str3);
//Função Void:
function func() {
}
//!== e === sempre preferir ao invés de != e ==
if (bool !== null) { }
if (bool === undefined) { }
if (bool) {
    var i = void 0;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}
//Não funciona devido ao escopo da variável i declarada com let
//console.log("Hello " + i);
//Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple;
tuple = ["teste", 1];
console.log(tuple);
//ENUM
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
})(Day || (Day = {}));
;
var day = Day.MONDAY;
console.log("" + day);
//# sourceMappingURL=olamundo.js.map