const emojiFromText = require("../lib");

// The results are ordered by the word count (in this case: home, sweet).
console.log(emojiFromText("Home sweet home!"));
// => [ { name: 'home',
//   count: 2,
//   match: Match { input: 'home', score: 1, emoji: [Object], emoji_name: 'family' },
//   score: 8 },
// { name: 'sweet',
//   count: 1,
//   match:
//    Match {
//      input: 'sweet',
//      score: 1,
//      emoji: [Object],
//      emoji_name: 'doughnut' },
//   score: 5 } ]

// Get only one emoji (the best match)
console.log(emojiFromText("Hello World!", true).match.toString());
// => ":wave:"
