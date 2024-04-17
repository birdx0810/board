const express = require(`express`);
const path = require("path");

const app = express();
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 3000


app.use("/public", express.static(path.join(__dirname, `/../public`)))
app.use("/src", express.static(path.join(__dirname)))

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `/views/index.html`));
});

const server = app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});

process.on("SIGINT", function () {
    console.log(`Received SIGINT signal`);
    server.close();
    process.exit()
});