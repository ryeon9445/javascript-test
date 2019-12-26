async function testPromise() {
  return await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

(async function() {
  console.log(await testPromise());
})();
