/**
 * TypeScript definitions for emoji-from-text
 */

/**
 * Match object from emoji-from-word dependency
 */
interface Match {
  input: string;
  score: number;
  emoji: object;
  emoji_name: string;
  toString(): string;
}

/**
 * Result object returned by emojiFromText
 */
interface EmojiResult {
  /** The word name */
  name: string;
  /** The word count in the input text */
  count: number;
  /** A Match instance from emoji-from-word */
  match: Match;
  /** The calculated score for this result */
  score: number;
}

/**
 * Get relevant emoji for a given input text.
 *
 * @param s The input text
 * @param f If `true`, only the first object from array will be returned
 * @returns An array of objects (or single object if f is true) containing word analysis with emoji matches, ordered by score
 */
declare function emojiFromText(s: string, f: true): EmojiResult;
declare function emojiFromText(s: string, f?: false): EmojiResult[];
declare function emojiFromText(
  s: string,
  f?: boolean
): EmojiResult | EmojiResult[];

export = emojiFromText;
