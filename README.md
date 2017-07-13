
# emoji-from-text

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/emoji-from-text.svg)](https://www.npmjs.com/package/emoji-from-text) [![Downloads](https://img.shields.io/npm/dt/emoji-from-text.svg)](https://www.npmjs.com/package/emoji-from-text)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`github-emojify`](https://github.com/IonicaBizau/github-emojify#readme)—Emojify your GitHub repository descriptions.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
