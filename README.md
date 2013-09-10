# model-firebase

  Batching for Google Apps Script.

## Why?

URLFetchApp and other request related Google Apps Script calls are time constrained. You can get more processing if you get items from your database in batch.

## Installation

    Project Key: `MYDQZSBPCbaPiuU-CxeBcQ8fbAXhMFjX_`
    Identifier: `Batches`

## API

```js
var batches = Batches.create(2);

for (var i = 0; i < 5; i += 1) {
  batches.push({ url: 'https://admin.company.com/users/' + i });
}

batches.each(function (batch) {
  Logger.log(batch);
});

/*
[13-09-09 23:22:32:585 PDT] [
  {url=https://admin.company.com/users/0}, {url=https://admin.company.com/users/1}
]
[13-09-09 23:22:32:585 PDT] [
  {url=https://admin.company.com/users/2}, {url=https://admin.company.com/users/3}
]
[13-09-09 23:22:32:585 PDT] [
  {url=https://admin.company.com/users/4}
  ]
*/
```




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

