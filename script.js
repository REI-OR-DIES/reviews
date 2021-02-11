/* eslint-disable func-names */
import { sleep } from 'k6';
import http from 'k6/http';

// See https://k6.io/docs/using-k6/options
export const options = {
  vus: 1000,
  duration: '60s',
};

export default function () {
  http.get('http://localhost:3002/api/reviews');
  sleep(1);
}
