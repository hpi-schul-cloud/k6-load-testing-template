# lib
This directory should contain javascript libraries / helper scripts that can be reused inside your tests.

Example helper file `helper.js`

```javascript
// Case insensitive value search inside an object
function getObjectValue(object, key) {
  return object[Object.keys(object).find(k => k.toLowerCase() == key.toLowerCase())];
}
```

How to use it:

```javascript
import { getObjectValue } from "../../lib/helper.js";

```
