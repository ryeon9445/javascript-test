const config = require("config");

const id = config.get("id");
console.log(id);

const pw = config.get("pw");
console.log(pw);
