const express = require("express");
const puppeteer = require("puppeteer");
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/api/pdf", async (req, res) => {
  const { host, protocol } = req.query;
  const url = `${protocol}//${host}`;
  const browser = await puppeteer.launch({
    headless: true
  });
  const webPage = await browser.newPage();
  // await webPage.setViewport({width: 1200, height: 800});
  await webPage.goto(url, {
    waitUntil: "networkidle0"
  });
  const pdf = await webPage.pdf({
    printBackground: true,
    format: "Letter",
    margin: {
      top: "20px",
      bottom: "40px",
      left: "20px",
      right: "20px"
    }
  });
  await browser.close();
  res.contentType("application/pdf");
  res.send(pdf);
});

app.get('/api/test', (req, res) => {
  res.send('API is running');
})

app.listen(8000, () => {
  console.log("Server started");
});
