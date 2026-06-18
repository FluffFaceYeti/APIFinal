# singlelistitems.js
## found in data/helpers
Defines commands that should only return a single reply for everyone.

Example:

```js
const SINGLE_VALUE_TYPES = new Set([
  "items1",
  "items2"
]);
```

Most users will never need to edit this file unless they wish to have something such as the "drink of the day" or the "ale of the day"
