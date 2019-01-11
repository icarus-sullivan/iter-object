import { iterObject, iterReplace } from '../index';

const MOCK_OBJECT = {
  src: {
    foo: {
      baz: {
        zip: 'bang',
      },
    },
  },
  versions: ['0.1.0', '0.1.2'],
};

const DESTRUCTIVE = JSON.parse(JSON.stringify(MOCK_OBJECT));

test('iterObject', () => {
  expect(iterObject).toBeDefined();

  const fn = jest.fn();
  iterObject(MOCK_OBJECT, (key, value) => fn(key, value));
  expect(fn.mock.calls[0]).toEqual([
    'src',
    MOCK_OBJECT.src,
  ]);
  expect(fn.mock.calls[1]).toEqual([
    'foo',
    MOCK_OBJECT.src.foo,
  ]);
  expect(fn.mock.calls[2]).toEqual([
    'baz',
    MOCK_OBJECT.src.foo.baz,
  ]);
  expect(fn.mock.calls[3]).toEqual([
    'zip',
    MOCK_OBJECT.src.foo.baz.zip,
  ]);
  expect(fn.mock.calls[4]).toEqual([
    'versions',
    MOCK_OBJECT.versions,
  ]);
  expect(fn.mock.calls[5]).toEqual([
    '0',
    MOCK_OBJECT.versions[0],
  ]);
  expect(fn.mock.calls[6]).toEqual([
    '1',
    MOCK_OBJECT.versions[1],
  ]);
});


test('iterReplace', () => {
  const result = iterReplace(DESTRUCTIVE, (key, value) => {
    if (key === 'foo') {
      return 'bar';
    }
    if (key === 'versions') {
      return ['0.1.0', '0.1.1'];
    }
    return value;
  });
  expect(result).toEqual({
    src: {
      foo: 'bar',
    },
    versions: ['0.1.0', '0.1.1'],
  });
});
