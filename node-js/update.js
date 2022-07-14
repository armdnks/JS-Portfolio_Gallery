/**
 * @title     Generate Random ID, Code, and Sort on json file
 * @terminal  node update.js
 */

const fs = require("fs");
const { jsonReader, uniqueID } = require("./helper.js");
const { filePath } = require("./constants.js");

jsonReader(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < data.length; i++) {
      data[i].id = uniqueID();
      data[i].code = JSON.stringify(
        data[i].image_url[0].match(/\d*-\d*(?=\-)/g)
      )
        .replace(/[^\d\-]/g, "")
        .replace(/(?<=\-)[\d]*/g, (x) => {
          if (x.length === 1) {
            return "00" + x;
          } else if (x.length === 2) {
            return "0" + x;
          }
          return x;
        });
    }

    data.sort(function (a, b) {
      if (a.code > b.code) return -1;
      else if (a.code < b.code) return 1;
      return 0;
    });

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) console.log(err);
    });
  }
});
