let a = parseFloat(prompt("Ingrese el primer número: "));
let b = parseFloat(prompt("Ingrese el segundo número: "));
let c = parseFloat(prompt("Ingrese el tercer número: "));
let d = parseFloat(prompt("Ingrese el cuarto número: "));
if (a > b && a > c && a > d)
{
    alert("El número mayor es: " + a);
}
else if (b > a && b > c && b > d)
{
    alert("El número mayor es: " + b);
}
else if (c > a && c > b && c > d)
{
    alert("El número mayor es: " + c);
}
else if (d > a && d > b && d > c)
{
    alert("El número mayor es: " + d);
}
else
{
    alert("Todos los números son iguales");
}