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