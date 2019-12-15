const async = require("async");

async.waterfall(
  [
    callback => {
      setTimeout(() => {
        console.log("task 1");
        callback(null, "task 2");
      }, 1000);
    },
    (arg1, callback) => {
      setTimeout(() => {
        console.log(arg1);
        callback(null, "done");
      }, 500);
    }
  ],
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  }
);
