function randomPart(value){
  var randomValue = Math.floor(Math.random() * 11) - 5;
  if (randomValue <= 0) {
    alert("Ви програли");
  } else if (randomValue <= 5 || randomValue > 0) {
    alert("Ви виграли " + value * randomValue);
  }
  game()
}

function game(){
  while (true){
    var inputValue = prompt("Введіть суму ставки")
    
    if (inputValue == null){break}
  
    if (!isNaN(parseInt(inputValue)) && inputValue >= 1){
      setTimeout(function() {
        randomPart(inputValue);
      }, 1000);
      break
    }
    else {
      alert("Некоректна сума ставки")
    }
  }
}
game()
