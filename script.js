// task 1
var i, k, task1="", task1c = "";
for (i=1; i<50; i++) {
    console.log(i);
    task1 = task1 + i + ",";
}
task1 = task1 + i + "<br>";
for (k=35; k>8; k--) {
    console.log(k);
    task1 = task1 + k + ",";
}
task1 = task1 + k + "<br>";
document.getElementById("task-1").innerHTML = task1;

//task 2
var x = 89, task2="";
while (x>=11) {
    console.log(x);
    task2 = task2 + x + "<br>";
    x--;
}
document.getElementById("task-2").innerHTML = task2;

//task 3
var a, task3 = 0;
for (a = 0; a <= 100; a++) {
    task3 += a;
}
console.log (task3);
document.getElementById("task-3").innerHTML = task3;

//task 4
var b, task4 = 0, task4h = "";
for (b = 1; b<=5; b++) {
    task4 += b;
    console.log (task4);
    task4h = task4h + b + "-" + task4 + "<br>";
}
document.getElementById("task-4").innerHTML = task4h;

//task 5 - while
var c = 8, task5 ="";
while (c < 56) {
    console.log(c);
    task5 = task5 + c + ",";
    c += 2;
}
task5 = task5 + c;
document.getElementById("task-5w").innerHTML = task5;

//task 5 - for
for (c = 8, task5 =""; c < 56; c += 2) {
    console.log(c);
    task5 = task5 + c + ",";
}
task5 = task5 + c;
document.getElementById("task-5f").innerHTML = task5;

//task 6
var n = 1000, num = 0;
while (n > 50) {
    n = n / 2;
    num ++;
}
console.log(n);
console.log(num);
document.getElementById("task-6").innerHTML = n + "-" + num;

//task 7
var task7, arr7 = [];
while (true) {
    task7 = prompt("Введите число");
    task7 = +task7;
    if (task7=== "" || task7=== 0) {
        break;
    } else if (typeof (task7) != "number" || isNaN(task7) ) {
        alert("Ошибка");
    } else {
        arr7.push(task7);
    }
}
var sum = 0;
for (var i =0; i < arr7.length ; i++) {
    sum += Math.abs(arr7[i]);
}
console.log(sum);
console.log(sum/arr7.length);
document.getElementById("task-7sum").innerHTML = "sum: " + sum;
document.getElementById("task-7avg").innerHTML = "avg: " + (sum/arr7.length);

//task 8
var str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
var arr = str.split (" ");
console.log(Math.max.apply(null, arr));
document.getElementById("task-8max").innerHTML = "max: " + Math.max.apply(null, arr);
console.log(Math.min.apply(null, arr));
document.getElementById("task-8min").innerHTML = "min: " + Math.min.apply(null, arr);

//task 9
document.getElementById("task-9").getElementsByTagName("p")[0].innerHTML = "Абзац 1";
document.getElementById("task-9").getElementsByTagName("p")[1].innerHTML = "Абзац 2";
document.getElementById("task-9").getElementsByTagName("p")[2].innerHTML = "Абзац 3";

//task 10
var st = 2**10;
console.log(st);
document.getElementById("task-10").innerHTML = st;

//task 11
var sqrt = 245;
console.log(Math.sqrt(sqrt));
document.getElementById("task-11").innerHTML = Math.sqrt(sqrt);
