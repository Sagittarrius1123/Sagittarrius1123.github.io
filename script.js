count = 0
function showMessage() 
{ 
    alert("Hello! Welcome to my website."); 
}
function changeBgColor() 
{ 
    count++
    if (document.body.style.backgroundColor == "lightblue")
    {
        document.body.style.backgroundColor = "white";
    }
    else
    {
        document.body.style.backgroundColor = "lightblue";
    }
    if (count == 10)
    {
        document.body.style.backgroundColor = "black";
        alert("You have reached dark mode."); 
    }
}    
function displayGreeting()
{
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my website";
}
function changeBgColorUser()
{
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}
function checkage()
{
    let age = document.getElementById("age").value;
    if (age<18)
    {
        alert("You are not old enough!")
    }
    else 
    {
        alert("You are old enough, you can use this website saftely")
    }
}
function favorite()
{
    document.getElementById("output").innerHTML = "You favorited it!";
}
function unfavorite()
{
    document.getElementById("output").innerHTML = "You unfavorited it!";
}