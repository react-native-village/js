import _ from "lodash";
import fs from "fs";
//import followers from "./followers.json"
//import following from "./following.json"

//const love = _.intersection(followers, following)
//const nonFollowers = _.difference(following, love)
import { array } from "../index";
console.log("array", array);

const data = array.map(x => `@${x}`);

fs.writeFile("./src/nonFollowers.json", JSON.stringify(data), err => {
  if (err) throw err;
  console.log("The file has been saved!");
});

//fs.writeFile(
//"./src/nonFollowers.json",
//JSON.stringify(array.map(x => `@${x}`), err => {
//if (err) {
//console.error(err);
//return;
//}
//console.log("File has been created");
//})
//);
