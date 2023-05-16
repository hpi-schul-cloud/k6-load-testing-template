# Options
This directory should contain option files for k6. 

## How to use
Documentation from k6

[How to use options](https://k6.io/docs/using-k6/k6-options/how-to/)
[Environment variables](https://k6.io/docs/using-k6/environment-variables/)


```javascript
const options = JSON.parse(open(`${__ENV.OPTIONS_FILE}`));
```

```bash
OPTIONS_FILE=config/options/k6.json k6 run tests/api/simple.js
```


## Examples
Example option file `5s_2rps.json`:

```json
{
  "stages": [
    { "duration": "1s", "target": 2 },
    { "duration": "3s", "target": 2 },
    { "duration": "1s", "target": 0 }
  ],
  "rps": 2,
  "batchPerHost": 0
}
```

Example option file `30s_200rps.json`:

```json
{
  "stages": [
    { "duration": "5s", "target": 200 },
    { "duration": "20s", "target": 200 },
    { "duration": "5s", "target": 0 }
  ],
  "rps": 200,
  "batchPerHost": 0
}
```
