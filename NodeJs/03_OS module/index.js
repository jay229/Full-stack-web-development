//   The Node.js os module
const { Console } = require('console');
const os=require('os');
// os.arch():Return the string that identifies the underlying architecture, like arm, x64, arm64
console.log(os.arch());

// os.cpus():Return information on the CPUs available on your system.
console.log( os.cpus());

// os.freemem():Return the number of bytes that represent the free memory in the system.
console.log( os.freemem());

// os.platform():Return the platform that Node.js was compiled for.
console.log( os.platform());

// os.userInfo():Returns an object that contains the current username, uid, gid, shell, and homedir
console.log( os.userInfo());