const fs = require("fs");

let output = "";

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  output += data1;
  fs.readFile("./lastname.txt", (err, data2) => {
    output += ` ${data2}`;
    fs.readFile("./age.txt", (err, data3) => {
      output += ` is ${data3} years old`;
      fs.readFile("./hobbies.txt", (err, data4) => {
        const hobbies = JSON.parse(data4.toString()).join(" and ");
        output += ` and his hobbies are ${hobbies}`;
        console.log(output);
      });
    });
  });
});
