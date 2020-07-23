var date = document.getElementById("time")
function setDate() {
    date.innerText = new Date();
}


 setTimeout( setDate ,2000)
//setInterval(setDate , 2000)