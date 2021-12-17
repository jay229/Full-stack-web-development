// The Node.js path module
const path = require('path')

// path.basename():Return the last portion of a path. A second parameter can filter out the file extension.
console.log(path.basename("G:/Full stack web development/NodeJs/04_Path module/index.js"));

// path.dirname():Return the directory part of a path.
console.log(path.dirname("G:/Full stack web development/NodeJs/04_Path module/index.js"));

// path.extname():Return the extension part of a path
console.log(path.extname("G:/Full stack web development/NodeJs/04_Path module/index.js"));

// path.parse():Parses a path to an object with the segments that compose it:
console.log(path.parse("G:/Full stack web development/NodeJs/04_Path module/index.js"));

// path.format():Returns a path string from an object, This is the opposite of path.parse
console.log(path.format({ dir: 'C:\\Users\\joe', base: 'test.txt' }));
