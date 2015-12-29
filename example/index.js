const emojiFromText = require("../lib");

// The results are ordered by the word count (in this case: home, sweet).
console.log(emojiFromText("Home sweet home!"));
// => [ Match {
//     input: 'home',
//     score: 1,
//     emoji: { keywords: [Object], char: '👪', category: 'people' },
//     emoji_name: 'family' },
//   Match {
//     input: 'sweet',
//     score: 1,
//     emoji: { keywords: [Object], char: '🍩', category: 'foodanddrink' },
//     emoji_name: 'doughnut' } ]

// Get only one emoji (the best match)
console.log(emojiFromText("Hello World!", true).match.toString());
// => ":wave:"
