/**
 * Generate Random ID, Code, and Sort on json file
 */

const fs = require("fs");
const { jsonReader, uniqueID } = require("./helper.js");

// const dirPath = "../data";
const filePath = "../data/portfolio.json";

jsonReader(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < data.length; i++) {
      data[i].id = uniqueID();
      data[i].code = JSON.stringify(
        data[i].imageUrl[0].match(/\d*-\d*(?=\-)/g)
      ).replace(/[^\d\-]/g, "");
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
