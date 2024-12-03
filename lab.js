function greetUser(name){
    document.getElementById("output").innerText = "hello "+ name;
}

greetUser("dylan")


function message(){
    document.getElementById("message").innerText = "Hello, world!";
}

function changes()
{
    let a = document.getElementById("id1").value
    let b = document.getElementById("id2").value
    document.getElementById("result").innerText = a + b 

}

function title()
{
    let x = document.getElementById("q4").value
    document.getElementById("title").innerText = x;
}

function question5()
{
    let a = document.getElementById("input1").value
    let b = document.getElementById("inpu2").value
    document.getElementById("combinedText").innerText = a + b 
}

function backgroundEvent(){
    document.getElementById('q6').addEventListener('colorBox')
}