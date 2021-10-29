const puppeteer = require("puppeteer");
const fs = require("fs");
const dir = "./src";
const ouptputCSV = "./src/list.csv";

// create folder
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Create list.csv
fs.writeFile(ouptputCSV, "記事番号,タイトル,投稿者,投稿日時\n", (err) => {
  if (err) throw err;
});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://susumuhirasawa.com/gn/gp2002/main.cgi");

  while (true) {
    const result = await page.evaluate(() => {
      const elements = document.querySelectorAll("dl dd");
      let data = "";
      for (let element of elements) {
        const donain = element.textContent.split("\n")[3];
        const title = element.querySelector("a").innerText;
        const number = element.querySelector("font[size='2']").innerText;
        const details = element.textContent.split("\n")[2].split(/[()]/);
        const name = details[0].trim();
        const date = details[1].trim();
        data += donain.indexOf("chaosunion") > -1
            ? `${number},${title},${name},${date}\n`
            : ``;
      }
      return data;
    });

    fs.appendFile(ouptputCSV, result, (err) => {
      if (err) throw err;
    });

    const buttonSelector = await page.$$("[value=次のページ]");
    if (buttonSelector.length > 0) {
      await　page.click("[value=次のページ]")
    } else {
      break;
    }
  }
  await browser.close();
})();
