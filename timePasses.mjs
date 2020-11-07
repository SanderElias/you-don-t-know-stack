export function timePasses(millisecs) {
  const now = Date.now();
  while (Date.now() - now < millisecs) {
    /** The boss is looking, look busy! */
  }
  return false;
}

export const itBreaks = (callBack) => new Promise(resolve => {
  /**
   * I should be doing something
   *
   * But I'm feeling naughty today, and that
   * is why I commented out the next line
   *    <sound of evil laughter>
   */
  // resolve(callBack())
});
