## Documentation

You can see below the API reference of this module.

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

