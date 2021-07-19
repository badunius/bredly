Bredly uses recursive dictionary replacement

```js
const dictionary = {
  '$quality': ['red', 'sour', 'ripe', 'rotten'],
  '$object': ['a piano', 'a $quality apple'],
  '$start': ['Subject is $subject', '$object is an object']
}

compose(dictionary,'$start'))
```

compose will pick a random entry for `$start` key

then, for every word starting with a `$` it will recursively pick a replacement from the dictionary