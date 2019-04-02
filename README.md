# yubinbango.js

This is a fork repository from [yubinbango/yubinbango-core](https://github.com/yubinbango/yubinbango-core).

This package is available on npm and only run on the browser.

## Installation

`npm install yubinbango.js`

## Usage

```javascript
import YubinBango from 'yubinbango.js';
YubinBango.getAddress('1058711').then(res => {
    console.log(res);
});

/* output:
{
  extended: "１丁目１１－２（芝郵便局私書箱第２１１号）",
  locality: "品川区",
  prefecture: "東京都",
  street: "大崎"
}
*/
```


