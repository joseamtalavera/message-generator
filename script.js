// define arrays for each part of the message
const greetings = ["Hello", "Hi", "Hey", "Greetings"];
const adjectives = ["amazing", "wonderful", "fantastic", "incredible", "awesome"];
const nouns = ["day", "evening", "morning", "afternoon", "week", "weekend"];
const phrases = ["hope you're doing well", "enjoy your day", "have a good one", "take care"];

// generate a random message
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

// create the message
const message = `${randomGreeting}! Have an ${randomAdjective} ${randomNoun}. ${randomPhrase}!`;

// output the message to the console
console.log(message);
