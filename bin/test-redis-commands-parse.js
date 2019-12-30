const cheerio = require("cheerio");
const requestPromise = require("request-promise");

(async function() {
  const document = await getDocument();
  const $ = cheerio.load(document);
  const commands = $(".container ul li");

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];

    /**
     * 명령어
     */
    const command = $(".command", cmd)
      .html()
      .trim()
      .replace(/^\s+.+/gm, "")
      .trim();

    /**
     * 명령어에 필요한 아규먼트
     */
    const args = $(".command .args", cmd)
      .text()
      .trim()
      .replace(/\s+/g, " ");

    /**
     * 명령어의 간략한 설명
     */
    const summary = $(".summary", cmd)
      .text()
      .trim();

    /**
     * 명령어, 아규먼트, 명령어 설명 출력
     */
    console.log(command + "," + args + "," + summary);
  }
})();

/**
 * 레디스 명령어목록 페이지 html 정보를 가져온다.
 */
async function getDocument() {
  const options = Object.assign({
    method: "GET",
    uri: "https://redis.io/commands"
  });
  return await requestPromise(options);
}
