const words = [
  "You've caught my eyes, valentine!",
  "You're the apple of all my eyes!",
  "I'm be-holdin' a special place in my heart for you!",
  "I've got my eyes on you, valentine!",
  "You're the beauty to my beholder!",
  "My love for you is all-encompassing, just like eyes!",
  "I can't help but stare, valentine!",
  "I don't need love potions to fall for you!",
  "You're the center of my vision, valentine!",
  "I can't keep my eyes off of you, valentine!",
  "I'm beholding you in my heart this valentine's day!",
  "My love for you is multi-faceted, just like my eyes!",
  "You're the only one who can make my eyes sparkle!",
  "You're enchanting, valentine!",
  "I'm be-holdin' back nothing this valentine's Day!",
  "You leave me spellbound, valentine!",
];

const throws = [
  {
    throw: "wisdom",
    effect: "you become charmed for 1 hour ;)",
  },
  {
    throw: "constitution",
    effect: "you become paralyzed for 1 minute D:",
  },
  { throw: "wisdom", effect: "you become frightened for 1 minute :S" },
  { throw: "dexterity", effect: "your speed is halved for 1 minute" },
  {
    throw: "constitution",
    effect: "you take 3d6 necrotic damage, half on a success.",
  },
  {
    throw: "strength",
    effect:
      "you are moved up to 30 feet in a direction of my choice and restrained until my next turn",
  },
  { throw: "wisdom", effect: "you become unconscious for 1 minute" },
  {
    throw: "dexterity",
    effect:
      "you are restrained- fail at the end of your next turn and you are petrified",
  },
  {
    throw: "dexterity",
    effect:
      "you take 10d8 force damage. if you are reduced to 0 hp, you are disintegrated :)",
  },
  {
    throw: "dexterity",
    effect:
      "you take 10d10 necrotic damage. if you are reduced to 0 hp, you die :)",
  },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5).entries();
}

let shuffled = shuffle(words);

function get() {
  const next = shuffled.next();
  if (next.done) {
    shuffled = shuffle(words);
    return get();
  } else {
    return next.value[1];
  }
}

const outputId = "response";
const beholder = "beholder";

function animate(animation, timeout = 500) {
  const b = document.getElementById(beholder);
  b.classList.add(animation);
  setTimeout(() => b.classList.remove(animation), timeout);
}

function yes() {
  animate("animate__heartBeat");
  document.getElementById(outputId).innerText = get();
}

function no() {
  const consequence = throws[Math.floor(Math.random() * throws.length)];
  animate("animate__shakeX");
  document.getElementById(
    outputId
  ).innerText = `Please make a ${consequence.throw} 16 saving throw.\n\nif you fail, ${consequence.effect}`;
}
