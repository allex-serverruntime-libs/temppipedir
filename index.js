var Os = require('os');

module.exports = function tempPipeDir () {
  if (Os.type() === 'Windows_NT') {
    return '\\\\.\\pipe';
  }
  return '/tmp'; //Os.tmpdir();
};

