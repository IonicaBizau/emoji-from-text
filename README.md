# emoji-from-text [![Support this project][donate-now]][paypal-donations]

Get relevant emoji from an input text.

## Installation

```sh
$ npm i --save emoji-from-text
```

## Example

```js
const emojiFromText = require("emoji-from-text");

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
```

## Documentation

### `emojiFromText(s, f)`

#### Params
- **String** `s`: The input text.
- **Boolean** `f`: If `true`, only the first object from array will be returned.

#### Return
- **Array** An array of objects containing:
 - `name` (String): The word name.
 - `score` (Number): The match score.
 - `match` (Match): A [`Match`](https://github.com/IonicaBizau/emoji-from-word#matchinput) instance.

The array is ordered by score.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md