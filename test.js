/* eslint-env jest */
const nproc = require('.');

it('when nproc works', () => {
  const childProcess = {
    spawnSync: () => ({
      stdout: Buffer.from('5\n'),
    }),
  };
  expect(nproc(childProcess)).toBe(5);
});

it('when nproc throws', () => {
  const childProcess = {
    spawnSync: () => {
      throw new Error('fail');
    },
  };
  const os = {
    cpus: () => [1, 2, 3],
  };
  expect(nproc(childProcess, os)).toBe(3);
});

it('when nproc has error', () => {
  const childProcess = {
    spawnSync: () => ({
      error: new Error('fail'),
    }),
  };
  const os = {
    cpus: () => [1, 2, 3, 4, 5, 6, 7],
  };
  expect(nproc(childProcess, os)).toBe(7);
});
