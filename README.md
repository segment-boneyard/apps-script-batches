# batches

URLFetchApp and other request related Google Apps Script calls are time constrained. You can get more processing if you request database items in batch.

You can find the Googe Apps Script project [here](https://script.google.com/d/MYDQZSBPCbaPiuU-CxeBcQ8fbAXhMFjX_/edit).

## Project Key

    MYDQZSBPCbaPiuU-CxeBcQ8fbAXhMFjX_

## API

```js
// create batches of maximum size 2
var batches = Batches.create(2);

// push the tasks
for (var i = 0; i < 5; i += 1) {
  batches.push('user' + i);
}

// traverse each of the batches
batches.each(function (batch) {
  Logger.log(batch);
  // make batched URLFetchApp request here
});
```

and the log shows the batched user id:
```
[13-09-09 23:22:32:585 PDT] [user0, user1]
[13-09-09 23:22:32:585 PDT] [user2, user3]
[13-09-09 23:22:32:585 PDT] [user4]
```

## Dependencies

If you're *not* installing via the project key, but by adding the `.gs` files to your project, you'll need these dependencies:

**Underscore** `MGwgKN2Th03tJ5OdmlzB8KPxhMjh3Sh48`

## License
```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (C) 2012 [Ilya Volodarsky](https://twitter.com/ivolo)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.