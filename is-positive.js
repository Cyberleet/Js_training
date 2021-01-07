'use strict'

/*
 * Create a function `isPositive` that takes a Number
 * and return if the given number is positive
 *
 * @next sign
 */

// Your code :
function isPositive(num) {
    return num > 0 ? true : false;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)
// End of tests */
