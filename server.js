import express from "express";
import dotenv from "dotenv/config";
import { getParamsURL, getPath } from "./getURL";
import viewEngine from "./viewEngine";
import WebRoute from "./Route/webRoute.js";
import bodyParser from "body-parser";
import session from "express-session";
import sequelize from "./DB/db";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT;
viewEngine(app);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
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

app.use(
  session({
    // key: 'session_key',
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use(WebRoute);

app.use((req, res, next) => {
  res.redirect("https://http.cat/404");
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connect DB success");
  })
  .catch((err) => {
    console.log("Connect DB fail", err);
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
