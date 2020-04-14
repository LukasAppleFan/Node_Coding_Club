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