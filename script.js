var count = 9;
var count2 = 12;
var count3 = 7;
var countElement = document.querySelector("#like-counter");
var countElement2 = document.querySelector("#like-counter2");
var countElement3 = document.querySelector("#like-counter3");

function add1()
{
    count++;
    countElement.innerText = count + " like(s)";
}

function add2()
{
    count2++
    countElement2.innerText = count2 + " like(s)";
}

function add3()
{
    count3++;
    countElement3.innerText = count3 + " like(s)";
}