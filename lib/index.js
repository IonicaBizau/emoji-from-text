const emojiFromWord = require("emoji-from-word")
    , countWordsArray = require("count-words-array")
    ;

/**
 * emojiFromText
 *
 * @name emojiFromText
 * @function
 * @param {String} s The input text.
 * @param {Boolean} f If `true`, only the first object from array will be returned.
 * @return {Array} An array of objects containing:
 *
 *  - `name` (String): The word name.
 *  - `score` (Number): The match score.
 *  - `match` (Match): A [`Match`](https://github.com/IonicaBizau/emoji-from-word#matchinput) instance.
 *
 * The array is ordered by score.
 */
module.exports = function emojiFromText(s, f) {

    if (f) {
        return emojiFromText(s)[0];
    }

    var w = countWordsArray(s, true);

    w.forEach(c => {
        c.match = emojiFromWord(c.name)
        c.score = c.match.score * c.name.length * c.count;
    })

    w.sort((a, b) => {
        return a.score < b.score ? 1 : -1;
    });

    return w;
};
