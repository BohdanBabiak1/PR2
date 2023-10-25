var text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
var delay = 100
var textOutput = document.getElementById("text-output")
var i = 0

function writeText(){
    if (i < text.length) {
        textOutput.innerHTML += text.charAt(i);
        i++;
    }
    setTimeout("writeText()", delay);
}
writeText()