let A = (42 + "0") / (4**2);
console.log(A);

let num1 = 0;
{
	num1 = 1;
	const num2 = 0;
}
console.log(num1);
//console.log(num2);

console.log("J'ai " + A + "€")
console.log(`J'ai ${A} €`);

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);
console.log(x + " + " + y + " = " + (x + y));

let B = 42;
B = String(B);
console.log(typeof(B));

// III
// Petit exercice !
let age = 18;
if (age >= 18) {
	console.log("Vous êtes majeur : " + age + " ans");
} else if (age < 18) {
	console.log("Vous êtres mineur : " + age + " ans");
}

// Deuxième petit exercice !
let couleur = "bleu";
if (couleur == "bleu") {
	console.log("La couleur est bleu");
} else if (couleur == "rouge") {
	console.log("La couleur est rouge");
} else if (couleur == "vert") {
	console.log("La couleur est vert");
} else if (couleur == "jaune") {
	console.log("La couleur est jaune");
} else {
	console.log("La couleur était : " + couleur);
}

// C - Les boucles

let C = 0;

while (C < 10) {
	console.log(C);
	C++;
}

let D = 10;
for (C = 0; C < D; C++) {
	console.log(C);
}

let i = 7;
switch (i) {
 case 0:
 console.log(0);
 break;
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(3);
 break;
 case 3:
 console.log(4);
 break;
 case 4:
 console.log(5);
 break;
 default:
 console.log("(╯°□°)╯︵ ┻━┻");
}

// Petit exercice !
let couleurArray = ["bleu","rouge","jaune","vert", "violet"];
for (let index = 0; index < 5; index++) {
	switch (index) {
		case 0:
		console.log(`La couleur à l'index ${index} est : ${couleurArray[index]}`);
		break;
		case 1:
		console.log(`La couleur à l'index ${index} est : ${couleurArray[index]}`);
		break;
		case 2:
		console.log(`La couleur à l'index ${index} est : ${couleurArray[index]}`);
		break;
		case 3:
		console.log(`La couleur à l'index ${index} est : ${couleurArray[index]}`);
		break;
		default:
		console.log(`La couleur ${couleurArray[4]} n'était pas attendue`);
	}
}

// IV - Les fonctions
// A - Les fonctions traditionnelles
function myReturn0() {
	return (0);
}

function myReturnNothing() {
	return;
}

function addTwoNums(num1, num2) {
	return num1 + num2;
}
console.log(addTwoNums(15, 15));

function myAdditionV1(val1, val2) {
	return (val1 + val2);
}
function myAdditionV2(val1, val2) {
	let res = val1 + val2;
	return (res);
}
console.log(myAdditionV1(1, 1));
console.log(myAdditionV2(1, 1));

const maVariable = function (param1, param2) {
	return (param1 + param2);
}
console.log(maVariable(1, 1));
console.log(maVariable(2, 2));

couleurArray = ["bleu","rouge","jaune","vert", "violet"];
const colorsToIndex = array => {
	let res = "";
	for (let index = 0; index < couleurArray.length; index++) {
		res += `L'index ${index} correspond à la couleur ${array[index]}`;
		if (index !== array.length - 1) {
 			res += '\n';
		}
	}
	return res;
}

console.log(colorsToIndex(couleurArray));

const corlorsToIndex2 = array => {
	let res = "";
	for (let i = 0; i < array.length; i++) {
		res += `Il y a la couleur ${array[i]} à l'index ${i}!`;
		if (i !== array.length - 1) {
 			res += '\n';
		}
	}
	return (res);
}
console.log(corlorsToIndex2(couleurArray));