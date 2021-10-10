export function fakeCloneRepository() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Math.random() < 0.5
          ? {
              ok: false,
              statusText: 'Some error with GitHub repository.',
            }
          : {
              ok: true,
              statusText: 'Ok',
            },
      );
    }, 2000);
  });
}
