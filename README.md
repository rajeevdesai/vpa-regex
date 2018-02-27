# vpa-regex [![Build Status](https://travis-ci.org/rajeevdesai/vpa-regex.svg?branch=master)](https://travis-ci.org/rajeevdesai/vpa-regex)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frajeevdesai%2Fvpa-regex.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Frajeevdesai%2Fvpa-regex?ref=badge_shield)
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
```

## License
[MIT](https://tldrlegal.com/license/mit-license)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frajeevdesai%2Fvpa-regex.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Frajeevdesai%2Fvpa-regex?ref=badge_large)