import { Counter } from './send';
import { getLCP, getFID, getFCP, getTTFB, getCLS } from 'web-vitals';
import Bowser from 'bowser';

export let counter = new Counter();

const pages = {
  '/': 'Home',
  '/settings': 'Settings',
};

let page = pages[location.pathname];
let bowser = Bowser.getParser(navigator.userAgent);

counter.init(
  'D00B940B-6C10-4B47-8CF8-73E14E665FD2',
  String(Math.random()).substr(2, 12),
  page,
);
counter.setAdditionalParams({
  env: 'development',
  platform: bowser.getPlatformType(),
  browser: bowser.getBrowserName(),
  os: bowser.getOSName(),
});

var perfEntries = performance.getEntriesByType('navigation');
var entry = perfEntries[0];
counter.send('connect', entry.connectEnd - entry.connectStart);
counter.send('response', entry.responseEnd - entry.responseStart);

function send({ name, delta }) {
  counter.send(name, delta);
}
getFID(send);
getFCP(send);
getLCP(send);
getCLS(send);
getTTFB(send);
