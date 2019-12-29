const cheerio = require("cheerio");
const requestPromise = require("request-promise");

(async function() {
  const document = await getDocument();
  const $ = cheerio.load(document);
  const commands = $(".container ul li");

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];

    const command = $(".command", cmd)
      .html()
      .trim()
      .replace(/^\s+.+/gm, "")
      .trim();

    const args = $(".command .args", cmd)
      .text()
      .trim()
      .replace(/\s+/g, " ");

    const summary = $(".summary", cmd)
      .text()
      .trim();

    console.log(command + "," + args + "," + summary);
  }
})();

async function getDocument() {
  const options = Object.assign({
    method: "GET",
    uri: "https://redis.io/commands"
  });
  return await requestPromise(options);
}
