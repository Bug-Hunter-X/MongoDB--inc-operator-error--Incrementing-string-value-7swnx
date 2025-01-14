# MongoDB $inc operator error: Incrementing string value

This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method.  The error arises from attempting to increment a field with a string value instead of a number.

## Bug Report
The provided `bug.js` file contains code that attempts to increment the `count` field of a document. However, the value passed to `$inc` is a string ("1"), which leads to an error.

## Solution
The corrected code in `bugSolution.js` demonstrates the correct usage of `$inc`, ensuring that the value being incremented is a number.