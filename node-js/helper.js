const fs = require("fs");

function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + "-" + chr4() + "-" + chr4() + chr4();
}

function jsonReader(file, cb) {
  fs.readFile(file, "utf-8", (error, fileData) => {
    if (error) return cb && cb(error);

    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (error) {
      return cb && cb(error);
    }
  });
}

module.exports = { uniqueID, jsonReader };
