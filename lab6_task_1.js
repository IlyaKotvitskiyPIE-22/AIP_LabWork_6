let radius = Number(prompt("Введите радиус окружности:"));
let squareCircle;

function calculateAreaCircle(radius){
    squareCircle = 3.14 * radius;
    return squareCircle;
}

calculateAreaCircle(radius);
alert(squareCircle);
