function MoodChange()
{
    let mood = document.getElementById("mood").value;
    if (mood === "sad")
    {
        document.body.style.backgroundColor = "lightblue";

    }
    else if (mood === "happy")
    {
        document.body.style.backgroundColor = "yellow";
    }
    else if (mood === "angry")
    {
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
}
function Sad()
{
    document.body.style.backgroundColor = "lightblue";
}
function Angry()
{
    document.body.style.backgroundColor = "red";
}
function Happy()
{
    document.body.style.backgroundColor = "yellow";
}