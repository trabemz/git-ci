import { buildsMock as builds } from './buildsMock';

export function fakeFetchBuilds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        builds,
        ok: true,
        statusText: 'Ok',
      });
    }, 500);
  });
}
