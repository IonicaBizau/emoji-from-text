
# emoji-from-text

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/emoji-from-text.svg)](https://www.npmjs.com/package/emoji-from-text) [![Downloads](https://img.shields.io/npm/dt/emoji-from-text.svg)](https://www.npmjs.com/package/emoji-from-text) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get relevant emoji for a given input text.

## :cloud: Installation

```sh
$ npm i --save emoji-from-text
```


## :clipboard: Example



```js
const emojiFromText = require("emoji-from-text");

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
```

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)—Emojify your GitHub repository descriptions.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
