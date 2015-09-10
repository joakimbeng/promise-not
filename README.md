# promise-not

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> The NOT (!) operator for promises

## Installation

Install `promise-not` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-not
```

## Usage

### Module usage

```javascript
var not = require('promise-not');

not(Promise.resolve(false))
  .then(function (val) {
    // val === true
  });
```

## API

### `not(val)`

| Name | Type | Description |
|------|------|-------------|
| `val` | `Mixed`| Value to run ! on |

Returns: `Promise`, which resolves to the invers of what `val` resolves to.

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-and`](https://github.com/joakimbeng/promise-and)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-not
[npm-image]: https://badge.fury.io/js/promise-not.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-not
[travis-image]: https://travis-ci.org/joakimbeng/promise-not.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
