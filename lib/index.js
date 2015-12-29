const emojiFromWord = require("emoji-from-word")
    , countWordsArray = require("count-words-array")
    ;

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
