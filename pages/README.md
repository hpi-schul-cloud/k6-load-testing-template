# pages
A collection of abstraction classes to keep the actual tests concise and readble.

For example one could create a `homepage.js` containing a `Homepage` class that deals with all the code necessary to navigate and interact with the homepage of a website.

Example usage:

```javascript
import Homepage from '../../pages/homepage.js';

let homepage = new Homepage(environment.url, '01_Home');

export default function () {
  check200(homepage.open())
}
```

Example `homepage.js`

```javascript
import http from 'k6/http'
import { sleep } from 'k6';

export default class Homepage {
  constructor(url, name) {
    this.url = url
    this.name = name
  }

  open() {
    sleep(Math.random() * 5);
    return http.get(`${this.url}`, {tags: { name: this.name }});
  }
}
```
