# who-called-me
 Information from the call stack of statement

## Installing

Using npm:

```bash
$ npm install who-called-me
```

## Example

```js
const whoCalledMe = require('who-called-me');
whoCalledMe(2) // => 'Line: 15. at file///C/dev/test2/2.js'
// whoCalledMe(2: Is a depth level, can be 3 or other )
whoCalledMe(2, 'report') // => 'Line: 15. at file///C/dev/test2/2.js', more data in console/terminal
// You can use 'report' for watching call stack and choose depth level you need
```


