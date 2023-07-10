const http = require("http");

const form = {
  title: "React is awesome",
  questions: [
    {
      question: "blahblahblah",
      options: ["aksdjfh", "asdfh", "reiry"],
    },
    {
      question: "orweor",
      options: ["czxmbvdskj", "weitunvasifh"],
    },
  ],
};

// const form = null;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/form") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(form));
  } else {
    res.end("Not Found");
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
