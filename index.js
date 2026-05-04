const button = document.getElementById("button");
const DiceResults = document.getElementById("DieResults");
const DiceImages = document.getElementById("DieImages");

button.onclick = function() {

    const NoofDice = document.getElementById("NoofDice").value;

    const values = [];
    const images = [];

    for(let i = 0; i < NoofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        images.push(`<img src="dice_images/${value}.png">`);
    }

    DiceResults.textContent = values.join(', ');
    DiceImages.innerHTML = images.join("");
}