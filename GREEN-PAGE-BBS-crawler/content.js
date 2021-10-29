const puppeteer = require("puppeteer");
const fs = require("fs");
const dir = "./src";

// create folder
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

(async () => {
  const data = await fs.promises.readFile("./src/list.csv", "utf8");
  const numbers = data
    .split("\n")
    .map((element) => {
      return element.split(",")[0].replace("No. ", "");
    })
    .filter(function (e) {
      return e;
    });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < numbers.length; i++) {
    await page.goto(
      `http://susumuhirasawa.com/gn/gp2002/main.cgi?md=fd&parent=${numbers[i]}`
    );
    const result = await page.evaluate(() => {
      const title = document.querySelector("b").innerText;
      const content = document.querySelectorAll("p");
      return `# ${title}\n\n${content[0].innerText.split('\n').join('  \n')}\n\n---\n\n${content[1].innerText.split('\n').join('  \n')}`;
    });

    fs.writeFile(`${dir}/${numbers[i]}.md`, result, (err) => {
      if (err) throw err;
    });
  }
  await browser.close();
})();
