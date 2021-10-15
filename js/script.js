// Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];
// Нкобходимо написать функцию которая вернет новый массив содержащий только положиельные числа. Для этого:
// — Создаем функцию с произвольным именем
// — Функция принимает массив в качестве параметра
// — В теле функции создаем пустой массив (пример: const exampleArr = [])
// — Если массив переданный в параметр функции пустой, то возвращаем сообщение об этом
// — Перебираем циклом массив, который передан в качестве параметра (использовать цикл for)
// — В теле цикла проверям является ли текущий элемент положительным числом или отрицательным (if)
// — Если число положительное, то добавлем его в ранее созданный массив с помощь функции push (пример exampleArr.push(currentPositiveNumber))
// — После выполнения цикла проверям массив, который наполняли только положиельными значениями
// — Если он не пустой, то возвращаем этот массив
// — Если пустой, возвращаем null


const arr = [1, 2, 3, -1, -2, -3, `asd`, `0`, `4`];
function positiveNumbersOnly ( someArray ) {
    const exampleArr = [];
    if ( someArray.length === 0 ) return console.log(`Transmitted array is empty`);
    for ( let currentPositiveNumber of someArray ) {
        if ( ( Math.sign( currentPositiveNumber ) === 1) && ( typeof( currentPositiveNumber ) === `number` ) ) exampleArr.push( currentPositiveNumber );
    }
    return exampleArr.length === 0 ? console.log(null) : console.log(exampleArr);
}
positiveNumbersOnly(arr);


