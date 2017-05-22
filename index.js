const childProcess = require('child_process');
const nativeOs = require('os');

module.exports = function processingUnits(cp = childProcess, os = nativeOs) {
  try {
    const result = cp.spawnSync('nproc');
    if (result.error != null) {
      return os.cpus().length;
    }
    return parseInt(result.stdout.toString().trim(), 10);
  } catch (err) {
    return os.cpus().length;
  }
};
