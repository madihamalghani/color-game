document.addEventListener("DOMContentLoaded", () => {
    const targetColorBox = document.getElementById("targetColor");
    const userColorBox = document.getElementById("userColor");
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");
    // ----------------------------------------------------
    const redValue = document.getElementById("redValue");
    const greenValue = document.getElementById("greenValue");
    const blueValue = document.getElementById("blueValue");
    const checkColorButton = document.getElementById("checkColor");
    const scoreDisplay = document.getElementById("score");

    let targetColor = generateRandomColor();
    targetColorBox.style.backgroundColor = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;

    redSlider.addEventListener("input", updateUserColor);
    greenSlider.addEventListener("input", updateUserColor);
    blueSlider.addEventListener("input", updateUserColor);
    checkColorButton.addEventListener("click", checkColor);

    function updateUserColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;
        userColorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
    }

    function generateRandomColor() {
        return {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256),
        };
    }

    function checkColor() {
        const r = parseInt(redSlider.value);
        const g = parseInt(greenSlider.value);
        const b = parseInt(blueSlider.value);
        const distance = Math.sqrt(
            Math.pow(targetColor.r - r, 2) +
            Math.pow(targetColor.g - g, 2) +
            Math.pow(targetColor.b - b, 2)
        );
        const maxDistance = Math.sqrt(Math.pow(255, 2) * 3);
        const score = Math.floor(((maxDistance - distance) / maxDistance) * 100);
        scoreDisplay.textContent = `Score: ${score}`;
    }
});
