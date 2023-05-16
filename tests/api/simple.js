import { check200 } from '../../lib/helper.js';
import Homepage from '../../pages/homepage.js';

export const environment = JSON.parse(open(`../../${__ENV.ENV_FILE}`));
export const options = JSON.parse(open(`../../${__ENV.OPTIONS_FILE}`));

let homepage = new Homepage(environment.url, '01_Home');

export default function () {
  check200(homepage.open())
}
