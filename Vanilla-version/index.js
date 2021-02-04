//Array of instrument names and associated keys
const names = [['Q', 'Heater-1'], ['W', 'Heater-2'], ['E', 'Heater-3'], ['A', 'Heater-4'], ['S', 'Clap'], ['D', 'Open Hi-Hat'], ['Z', 'Kick-n-Hat'], ['X', 'Kick'], ['C', 'Closed Hi-Hat']];

//Function to change inner HTML to relevant audio clip
function findName(letter) {
  names.forEach(subArray => {
    return (subArray[0] === letter) ?  document.getElementById('text').innerHTML = subArray[1] : null;
  });
}

/*Keydown EventListener*/
addEventListener('keydown', event => {  
  //Display text without .id
  findName(event.key.toUpperCase());
  //Play audio with quick repeated button presses
  document.getElementById(event.key.toUpperCase()).cloneNode().play();
});

/*Button Click EventListener*/
document.querySelectorAll('button').forEach(element => {
  element.addEventListener('click', function() {
    //Display Button id in Box
    findName(element.textContent);
    //Play audio with quick repeated button presses
    document.querySelector(`#${element.textContent}`).cloneNode().play();
  });
});