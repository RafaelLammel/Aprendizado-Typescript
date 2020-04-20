let p = document.createElement('p');
let ola: string = "DevDojo";
p.textContent = ola;
document.body.appendChild(p);

//Tipos:

let num:number = 10;
let bool:boolean = true;
let str:string = "A beautiful message";
let str2:string = 'A beautiful message';
let str3:string = `${str2}`;
console.log(str3);

//Função Void:
function func():void {

}

//!== e === sempre preferir ao invés de != e ==
if(bool !== null) {}
if(bool === undefined) {}

if(bool) {
  let i:number;
  for(i = 0; i < 10; i++) {
    console.log(i);
  }
}

//Não funciona devido ao escopo da variável i declarada com let
//console.log("Hello " + i);

//Arrays
let list:number[] = [1, 2, 3];
let list2:Array<number> = [1, 2, 3];

let tuple:[string, number];
tuple = ["teste", 1];
console.log(tuple);

//ENUM
enum Day{MONDAY, TUESDAY};

let day:Day = Day.MONDAY;

console.log(`${day}`);