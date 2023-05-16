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