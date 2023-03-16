//even Or odd
let a = (prompt("Enter a number to check ODD or EVEN"));
// if(typeof a !== number && typeof a === 'string'){
//     console.log("This is only for Numbers");}
if (a % 2 == 0)
    console.log(a + " " + "Is a Even Number");
else if (a % 2 != 0) {
    console.log(a + " " + "Is a Odd Number");
}



//Prime
let n = prompt("Enter the number to check it is prime or not")
function isPrime(n) {

    if (n <= 1)
        return false;

    if (n == 2 || n == 3)
        return true;

    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }

    return true;
}
isPrime(n)
    ? console.log(n + " " + "it is prime")
    : console.log(n + " " + "not a prime");

//Fibonacci
const c = parseInt(prompt("Enter a Number"));
console.log("Fibonacci series : ");
let fn = 0, sn = 1, temp;
console.log(fn);
console.log(sn);
for (let i = 0; i <= c; i++) {
    console.log(temp);
    temp = fn + sn;
    fn = sn;
    sn = temp;

}

//Sum and Average 
var d = [2, -9, 0, 5, 12, -25, 22, 9, 8, 12]
let f = d.length;
let sum = 0;
for (let i = 0; i < f; i++) {
    sum += d[i];
}
console.log(sum + " is the sum of the array");
console.log(sum / f + " is the Average of the array")

//pattern

let h = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        h += "*";

    } h += "\n";


} console.log(h);

//Numbers Pattern

let l = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        l += j

    } l += "\n";


} console.log(l);

//numbers pattern 2

let o = "";
let inc = 1;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        o += inc;
        inc++;

    } o += "\n";
}
console.log(o);

//to print acute angle "*" pattern mirror
let q = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 5 - i; j++) {
        q += " ";

    } for (let z = 0; z < i; z++) {
        q += "*";
    }
    q += "\n";
}
console.log(q);

//pyramid pattern
let A = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        A += " ";

    } for (let z = 0; z < i; z++) {
        A += " *";
    }
    A += "\n";
}
console.log(A);

