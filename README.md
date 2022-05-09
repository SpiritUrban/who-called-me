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
whoCalledMe() // => 'C:\\dev\\project\\file.js'
whoCalledMe('report') // => 'C:\\dev\\project\\file.js', more data in console/terminal
```


