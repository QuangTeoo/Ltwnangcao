import express from "express";
import dotenv from "dotenv/config";
import { getParamsURL, getPath } from "./getURL";
import viewEngine from "./viewEngine";
import WebRoute from "./Route/webRoute.js"
const app = express();
const port = process.env.PORT;
viewEngine(app);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello World! . Page About");
// });

// app.get("/date", (req, res) => {
//   res.send(Date());
// });
// app.get("/getURL", (req, res) => {
//   res.send(getParamsURL(req));
// });
// app.get("/ejs", (req, res) => {
//   res.render("test");
// });
// app.get("/home", (req, res) => {
//   res.render("home");
// })
// app.get("/about", (req, res) => {
//   res.render("about");
// })

//buoi2 nodejs
// app.get("/", (req, res) => {
//   res.render("main");
// })

app.use(WebRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
