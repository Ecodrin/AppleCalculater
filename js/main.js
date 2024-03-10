

const display = document.getElementById("Field")

function AppendDisplay(input){
    display.value += input
}

function ClearDisplay(){
    display.value = ""
}

function Counting(){
    display.value = eval(display.value)
}