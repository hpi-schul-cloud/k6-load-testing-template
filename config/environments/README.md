# Environments
This directory should contain references or settings like URLs for different environments to test. Either for the sake of testing these specific environments or because you have setup different environments for differently sized tests like 5k or 50k users.

## How to use it
Official k6 documentation:
- [How to use options](https://k6.io/docs/using-k6/k6-options/how-to/)
- [Environment variables](https://k6.io/docs/using-k6/environment-variables/)


```javascript
const environment = JSON.parse(open(`${__ENV.ENV_FILE}`)).users;
```

## Example file

```json
{
  "name": "nextcloud-scalability",
  "url": "https://infra-nextcloud-scalability.dbildungscloud.dev/login?direct=1",
  "user": "root",
  "config": {
    "latency": "0"
  }
}
```