# vpa-regex [![Build Status](https://travis-ci.org/rajeevdesai/vpa-regex.svg?branch=master)](https://travis-ci.org/rajeevdesai/vpa-regex) [![npm](https://img.shields.io/npm/dt/vpa-regex.svg)](https://www.npmjs.com/package/vpa-regex)
VPA Regex Pattern returns a regex that matches Virtual Payment Address (VPA).
Use it for picking up VPA's.

## Install

```
$ npm install vpa-regex
```

## Usage

```js
const vpaRegex = require('vpa-regex');

// Contains a vpa
'siddharth@ybl has requested ₹500'.match(vpaRegex());
//=> ['siddharth@ybl']

'You have paid ₹500 to siddharth@ybl'.match(vpaRegex());
//=> ['siddharth@ybl']

//Doesn't contain vpa
'Contact us at support@generic.com'.match(vpaRegex());
//=> []
```

## License
[MIT](https://tldrlegal.com/license/mit-license)
