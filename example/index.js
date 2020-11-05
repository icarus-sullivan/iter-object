const { iterObject, iterReplace } = require('iter-object');

const src = {
  owner: 'Alex',
  car: {
    make: 'Toyota',
    model: 'Matrix',
    year: 2013,
  },
};

iterObject(src, (key, value) => {
  console.log(key, value);
});

// output:
// owner Alex
// car { make: 'Toyota', model: 'Matrix', year: 2013 }
// make Toyota
// model Matrix
// year 2013

const sellerContent = {
  owner: 'Alex',
  car: {
    make: 'Toyota',
    model: 'Matrix',
    year: 2013,
  },
};

const buyerContent = iterReplace(sellerContent, (key, value) => {
  if (key === 'owner') {
    return 'New Buyer';
  }
  if (key === 'car') {
    return { ...value, color: 'White' };
  }
  return value;
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
// }
