/**
 * Sort array of strings by separate dictionary of [{string:rating},]
 * However, will be sorted not in relation to other ratings, but in relation to zero 0.
 * If higher than 0, will be promoted. Lower than 0 will be demoted to back of list.
 * (Todo: File/Function should be renamed, to reflect this relation to zero!)
 * @param arr {Array.<String>} - array of strings
 * @param preferences {object} - dictionary of {string:rating}
 *      rating lt 0 == bad, gt 0 == good, if undefined, default 0
 * @param immutable {boolean} - Set this to `true` to make this a pure function, and immutable.
 *    Otherwise, THIS IS NOT A PURE FUNCTION. By default it modifies the original array.
 * @return {Array.<String>} - array of strings
 */
export default function sort_strings_by_rating(arr, preferences, immutable=false) {
  if (!arr) return []
  if (immutable) arr = [...arr]
  // compile ratings
  let ratings = {}
  for (let string of arr) {
    // from dictionary of {string:rating}
    // good == above zero; bad == below zero;
    ratings[string] = preferences[string] || 0
  }
  return arr.sort(sort_strings_by_rating__helper.bind(ratings))
};

// helper function:
function sort_strings_by_rating__helper(a, b) {
  let a_rating = this[a]
  let b_rating = this[b]
  // prefer higher number
  // if b is higher, then rate it better than a
  return b_rating - a_rating
}

