const quoteEl = document.getElementById("quote");
const inputQuoteEl = document.querySelector(".add-quote");
const formAdd = document.getElementById("add-quote-form");

const random = [
    "The time is always right to do what is right. -Martin Luther King, Jr",

    "You have within you, right now, everything you need to deal with whatever the world can throw at you. -Brian Tracy",

    "The more I read, the more I acquire, the more certain I am that I know nothing. -Voltaire",

    "The only impossible journey is the one you never begin. -Tony Robbins",

    "If you fell down yesterday, stand up today. -H.G. Wells",

    "Believe you can and you are halfway there. -Theodore Roosevelt",

    "Do not watch the clock; do what it does. Keep going. -Sam Levenson",

    "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",

    "Never regret anything that made you smile. -Mark Twain",

    "Do not let making a living prevent you from making a life. -John Wooden",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",

    "Whether you think you can or you think you cannot, you are right. -Henry Ford",
];


function showRandomQuotes() {
    const randomDisplay = Math.round(Math.random() * random.length);
    return random[randomDisplay];
};

quoteEl.textContent = showRandomQuotes();

quoteEl.addEventListener("submit", (e) => {
    e.preventDefault();
})

formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const addValue = inputQuoteEl.value;
    console.log(addValue);
    inputQuoteEl.value = "";
    random.push(addValue);
    quoteEl.textContent = addValue;
    console.log(random);
})