let arrA = [];
let arrB = [];
let minimumNumber;
let arrLines = Number(prompt("Введите количество строк:"));
let arrColumns = Number(prompt("Введите количество столбцов:"));

function array_construction(arr, arrayLines, arrayColumns){
    arr = new Array(arrayLines);
    for (let i = 0; i < arrayLines; i++){
        arr[i] = new Array(arrayColumns);
    }
    return arr;
}

function array_filling(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.round(Math.random() * 10);
        }
    }
    return arr;
}

function find_minimum_number(arr){
    let minimumNumber = 1000;
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            if (arr[i][j] < minimumNumber){
                minimumNumber = arr[i][j];
            }

        }
    }
    return minimumNumber
}

function delete_minLines(arr){
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            if (arr[i][j] == minimumNumber){
                arr.splice(i, 1);
            }
        }
    }
    return arr
}

arrA = array_construction(arrA, arrLines, arrColumns);
arrA = array_filling(arrA);
arrB = arrA.slice();
minimumNumber = find_minimum_number(arrA);
arrA = delete_minLines(arrA);
alert("Начальный массив" + "\n" + arrB.join("\n") + "\n" + "Конечный массив:" + "\n" + arrA.join('\n'));

