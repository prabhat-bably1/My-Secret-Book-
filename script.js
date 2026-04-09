const sparkles = document.getElementById("sparkles");
const petals = document.getElementById("petals");

function createSparkles() {
  const count = 38;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.className = "sparkle-dot";

    const size = Math.random() * 4 + 2;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.background = Math.random() > 0.4 ? "#ffe3a0" : "#fff6dd";
    dot.style.boxShadow = `0 0 ${8 + Math.random() * 18}px ${dot.style.background}`;
    dot.style.animationDuration = (2 + Math.random() * 4) + "s";
    dot.style.animationDelay = (Math.random() * 4) + "s";

    sparkles.appendChild(dot);
  }
}

function createPetals() {
  const count = 10;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = -(Math.random() * 30) + "%";
    petal.style.setProperty("--drift", (20 + Math.random() * 70) + "px");
    petal.style.animationDuration = (10 + Math.random() * 8) + "s";
    petal.style.animationDelay = (Math.random() * 8) + "s";
    petal.style.opacity = 0.7 + Math.random() * 0.3;

    petals.appendChild(petal);
  }
}

createSparkles();
createPetals();
