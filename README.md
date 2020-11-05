# iter-object
![Downloads][link-download] ![Version][link-version] ![License][link-license]

#### An object iterator and object replacer with callbacks for key-value pairs

## Installation

```sh
npm install iter-object
```
or
```sh
yarn add iter-object
```

## Usage

| Method | Params | Description |
|--|--|--|
| iter_obj | (src: Object, fn: Function ) | Iterate over objects and display key-value pairs |
| iter_repl | (src: Object, fn: Function ) => any | Iterate over object and return modified or new values |

#### iterObject
Example:

```js
import { iter_obj } from 'iter-object';

const src = {
    owner: 'Alex',
    car: {
        make: 'Toyota',
        model: 'Matrix',
        year: 2013
    }
}

iter_obj(src, (key, value) => {
    console.log(key, value);
});

// output:
// owner Alex
// car { make: 'Toyota', model: 'Matrix', year: 2013 }
// make Toyota
// model Matrix
// year 2013
```

#### iterReplace

Example:

```js
import { iter_repl } from 'iter-object';

const sellerContent = {
  owner: 'Alex',
  car: {
    make: 'Toyota',
    model: 'Matrix',
    year: 2013,
  },
};

const buyerContent = iter_repl(sellerContent, (key, value) => {
  switch(key) {
      case 'owner': {
          return 'New Buyer';
      }
      case 'car': {
          return { ...value, color: 'White' };
      }
      default: {
          return value;
      }
  }
});

console.log(JSON.stringify(buyerContent, null, 2));

// output:
// {
//   "owner": "New Buyer",
//   "car": {
//     "make": "Toyota",
//     "model": "Matrix",
//     "year": 2013,
//     "color": "White"
//   }
```

[link-download]: https://img.shields.io/npm/dt/iter-object.svg
[link-version]: https://img.shields.io/npm/v/iter-object.svg
[link-license]: https://img.shields.io/npm/l/iter-object.svg