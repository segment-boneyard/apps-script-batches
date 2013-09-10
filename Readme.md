# batches

  `URLFetchApp` and other request-related Google Apps Script calls are time constrained. You can get more processing if you request database items in batch.

  You can find the Googe Apps Script project [here](https://script.google.com/d/MYDQZSBPCbaPiuU-CxeBcQ8fbAXhMFjX_/edit).

## Project Key

    MYDQZSBPCbaPiuU-CxeBcQ8fbAXhMFjX_

## Example

```js
var batches = Batches.create(2);

for (var i = 0; i < 5; i += 1) {
  batches.push('user' + i);
}

batches.each(function (batch) {
  // make your batched `URLFetchApp` request here
  Logger.log(batch);
});
```

The log shows the batched user ids:

```
[13-09-09 23:22:32:585 PDT] [user0, user1]
[13-09-09 23:22:32:585 PDT] [user2, user3]
[13-09-09 23:22:32:585 PDT] [user4]
```

## API

### Batches(max)
  
  Create a new set of `Batches` with the given `max` size.

## License

  MIT