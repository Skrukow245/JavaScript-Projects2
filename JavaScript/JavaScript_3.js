function displayType(character) {
    var characterType = character.getAttribute("data-character-type");     //data attribute
    alert(characterType + " is part of the " + character.innerHTML + " House.");
}