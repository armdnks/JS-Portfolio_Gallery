/**
 * @title     Create new data
 * @terminal  node new.js
 */

/* data model
  {
    "id": "uniqueID()",
    "image_url": ["link_image"],
    "title": "title",
    "brand": "brand",
    "year": 0000,
    "country": "country",
    "category": ["category"],
    "is_featured": false,
    "code": "code"
  }
*/

const fs = require("fs");
const readline = require("readline");
const { filePath } = require("./constants");

const { jsonReader, uniqueID } = require("./helper.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (props) => {
  return new Promise((resolve, reject) => {
    rl.question(props, (value) => resolve(value));
  });
};

const saveData = (props) => {
  const value = props;
  jsonReader(filePath, (error, data) => {
    value.code = JSON.stringify(
      value.image_url[0].match(/\d*-\d*(?=\-)/g)
    ).replace(/[^\d\-]/g, "");
    data.push(value);

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) console.log(err);
    });
  });
  rl.close();
};

const main = async () => {
  const id = uniqueID();
  const image_url = await question("image_url: ");
  const title = await question("title: ");
  const brand = await question("brand: ");
  const year = await question("year: ");
  const country = await question("country: ");
  const category = await question("category: ");
  const is_featured = await question("is_featured: ");

  saveData({
    id,
    image_url: image_url.split(","),
    title,
    brand,
    year: Number(year),
    country,
    category: category.split(","),
    is_featured:
      is_featured == 1 ? true : false || is_featured == "true" ? true : false,
  });
};

main();
