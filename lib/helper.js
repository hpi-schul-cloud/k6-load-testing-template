import { check } from 'k6';

export function check200(res) {
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
}